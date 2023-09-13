package com.ismartcoding.plain.receivers

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import com.ismartcoding.lib.helpers.CoroutinesHelper.coIO
import com.ismartcoding.plain.BuildConfig
import com.ismartcoding.plain.MainApp
import com.ismartcoding.plain.data.preference.WebPreference
import com.ismartcoding.plain.services.HttpServerService
import com.ismartcoding.plain.services.ScreenMirrorService

class ServiceStopBroadcastReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        coIO {
            if (intent.action == "${BuildConfig.APPLICATION_ID}.action.stop_http_server") {
                WebPreference.putAsync(MainApp.instance, false)
                HttpServerService.instance?.stop()
                HttpServerService.instance = null
            } else if (intent.action == "${BuildConfig.APPLICATION_ID}.action.stop_screen_mirror") {
                ScreenMirrorService.instance?.stop()
                ScreenMirrorService.instance = null
            }
        }
    }
}