package com.ismartcoding.plain.data.enums

import androidx.compose.foundation.BorderStroke
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.dp

enum class ButtonType {
    PRIMARY,
    SECONDARY,
    DANGER;

    @Composable
    fun getColors(): ButtonColors {
        return when(this) {
            PRIMARY -> {
                ButtonDefaults.buttonColors()
            }

            SECONDARY -> {
                ButtonDefaults.filledTonalButtonColors()
            }

            DANGER -> {
                ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.errorContainer,
                    contentColor = MaterialTheme.colorScheme.error,
                )
            }
        }
    }


    @Composable
    fun getBorder(): BorderStroke? {
        return when(this) {
            PRIMARY -> {
                null
            }

            SECONDARY -> {
                BorderStroke(1.dp, MaterialTheme.colorScheme.secondary)
            }

            DANGER -> {
                null
            }
        }
    }
}