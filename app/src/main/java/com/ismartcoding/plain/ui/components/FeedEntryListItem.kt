package com.ismartcoding.plain.ui.components

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.ClickableText
import androidx.compose.material3.Checkbox
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import coil.size.Size
import com.ismartcoding.lib.extensions.dp2px
import com.ismartcoding.lib.helpers.CoroutinesHelper.coIO
import com.ismartcoding.plain.enums.FeedEntryFilterType
import com.ismartcoding.plain.db.DFeed
import com.ismartcoding.plain.db.DFeedEntry
import com.ismartcoding.plain.db.DTag
import com.ismartcoding.plain.extensions.timeAgo
import com.ismartcoding.plain.ui.base.HorizontalSpace
import com.ismartcoding.plain.ui.base.PAsyncImage
import com.ismartcoding.plain.ui.base.VerticalSpace
import com.ismartcoding.plain.ui.models.FeedEntriesViewModel
import com.ismartcoding.plain.ui.models.TagsViewModel
import com.ismartcoding.plain.ui.models.select
import com.ismartcoding.plain.ui.theme.PlainTheme

@OptIn(ExperimentalFoundationApi::class, ExperimentalLayoutApi::class)
@Composable
fun FeedEntryListItem(
    viewModel: FeedEntriesViewModel,
    tagsViewModel: TagsViewModel,
    m: DFeedEntry,
    feed: DFeed?,
    tags: List<DTag>,
    onClick: () -> Unit,
    onLongClick: () -> Unit,
) {
    val context = LocalContext.current
    Row {
        if (viewModel.selectMode.value) {
            HorizontalSpace(dp = 16.dp)
            Checkbox(checked = viewModel.selectedIds.contains(m.id), onCheckedChange = {
                viewModel.select(m.id)
            })
        }

        Surface(
            modifier =
            PlainTheme
                .getCardModifier(selected = viewModel.selectedItem.value?.id == m.id || viewModel.selectedIds.contains(m.id))
                .combinedClickable(
                    onClick = onClick,
                    onLongClick = onLongClick,
                )
                .weight(1f),
            color = Color.Unspecified,
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                ) {
                    Column(
                        modifier = Modifier
                            .weight(1f)
                    ) {
                        Text(
                            text = m.title,
                            style = MaterialTheme.typography.titleMedium.copy(color = MaterialTheme.colorScheme.onSurface, fontWeight = FontWeight.SemiBold),
                        )
                        VerticalSpace(dp = 8.dp)
                        Text(
                            text = m.getSummary(),
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis,
                            style = MaterialTheme.typography.titleSmall.copy(color = MaterialTheme.colorScheme.onSurface),
                        )
                    }
                    if (m.image.isNotEmpty()) {
                        HorizontalSpace(dp = 12.dp)
                        PAsyncImage(
                            modifier =
                            Modifier
                                .size(64.dp)
                                .clip(RoundedCornerShape(4.dp)),
                            data = m.image,
                            size = Size(context.dp2px(64), context.dp2px(64)),
                            contentScale = ContentScale.Crop,
                        )
                    }
                }
                VerticalSpace(dp = 8.dp)
                FlowRow(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    Text(
                        text = arrayOf(feed?.name ?: "", m.author, m.publishedAt.timeAgo()).filter {
                            it.isNotEmpty()
                        }.joinToString(" · "),
                        style = MaterialTheme.typography.labelLarge.copy(color = MaterialTheme.colorScheme.secondary),
                    )
                    tags.forEach { tag ->
                        ClickableText(
                            text = AnnotatedString("#" + tag.name),
                            modifier = Modifier
                                .wrapContentHeight()
                                .align(Alignment.Bottom),
                            style = MaterialTheme.typography.labelLarge.copy(color = MaterialTheme.colorScheme.primary),
                            onClick = {
                                if (viewModel.selectMode.value) {
                                    return@ClickableText
                                }
                                viewModel.filterType = FeedEntryFilterType.DEFAULT
                                viewModel.tag.value = tag
                                coIO {
                                    viewModel.loadAsync(tagsViewModel)
                                }
                            }
                        )
                    }
                }
            }
        }
    }
}
