package com.ismartcoding.plain.helpers

import android.app.ActivityManager
import android.app.ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND
import android.app.ActivityManager.RunningAppProcessInfo.IMPORTANCE_VISIBLE
import android.content.Context
import android.content.Intent
import com.ismartcoding.lib.helpers.JsonHelper.jsonDecode
import com.ismartcoding.lib.helpers.JsonHelper.jsonEncode
import com.ismartcoding.plain.BuildConfig
import com.ismartcoding.plain.Constants
import com.ismartcoding.plain.MainApp
import com.ismartcoding.plain.R
import com.ismartcoding.plain.api.HttpClientManager
import com.ismartcoding.plain.data.LatestRelease
import com.ismartcoding.plain.data.Version
import com.ismartcoding.plain.data.preference.LatestReleasePreference
import com.ismartcoding.plain.features.locale.LocaleHelper.getString
import com.ismartcoding.plain.ui.helpers.DialogHelper
import io.ktor.client.request.get
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode

object AppHelper {
    private val fileIcons = mutableSetOf<String>()

    fun relaunch(context: Context) {
        val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)
        val componentName = intent!!.component
        val mainIntent = Intent.makeRestartActivityTask(componentName)
        context.startActivity(mainIntent)
        Runtime.getRuntime().exit(0)
    }

    fun foregrounded(): Boolean {
        val appProcessInfo = ActivityManager.RunningAppProcessInfo()
        ActivityManager.getMyMemoryState(appProcessInfo)
        return (appProcessInfo.importance == IMPORTANCE_FOREGROUND || appProcessInfo.importance == IMPORTANCE_VISIBLE)
    }

    suspend fun checkUpdateAsync(context: Context, showToast: Boolean = true): Boolean? {
       return try {
            val client = HttpClientManager.httpClient()
            val r = client.get(Constants.LATEST_RELEASE_URL)
            if (r.status == HttpStatusCode.Forbidden) {
                if (showToast) {
                    DialogHelper.showMessage(getString(R.string.rate_limit))
                }
                return false
            }

            val latestJSON = r.bodyAsText()
            if (latestJSON.isEmpty()) {
                if (showToast) {
                    DialogHelper.showMessage(getString(R.string.check_failure))
                }
                return null
            }

            val latest = jsonDecode<LatestRelease>(latestJSON)
            val skipVersion = Version("1.0.0")
            val currentVersion = Version(BuildConfig.VERSION_NAME)
            val latestVersion = Version(latest.tagName.substring(1))
            if (latestVersion.whetherNeedUpdate(currentVersion, skipVersion)) {
                LatestReleasePreference.putAsync(context, jsonEncode(latest))
                true
            } else {
                false
            }
        } catch (e: Exception) {
            e.printStackTrace()
            if (showToast) {
                DialogHelper.showMessage(getString(R.string.check_failure))
            }
            null
        }
    }

    fun getFileIconPath(extension: String): String {
        if (fileIcons.isEmpty()) {
            cacheIconKeys(MainApp.instance)
        }
        if (!fileIcons.contains(extension)) {
            return "file:///android_asset/ficons/default.svg"
        }

        return "file:///android_asset/ficons/$extension.svg"
    }

    private fun cacheIconKeys(context: Context) {
        context.assets.list("ficons")?.forEach {
            fileIcons.add(it.substringBefore("."))
        }
    }
}
