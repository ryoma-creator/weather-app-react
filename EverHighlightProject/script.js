document.addEventListener("DOMContentLoaded", function() {
    // ハイライトされた状態を復元
    const highlightedText = localStorage.getItem("highlightedText");
    if (highlightedText) {
        const selection = JSON.parse(highlightedText);
        highlightSelectedText(selection);
    }
});

document.addEventListener("mouseup", function(event) {
    const selection = getSelectionInfo();
    if (selection) {
        highlightSelectedText(selection);
        localStorage.setItem("highlightedText", JSON.stringify(selection));
    }
});

function getSelectionInfo() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        return {
            text: range.toString(),
            startOffset: range.startOffset,
            endOffset: range.endOffset
        };
    }
    return null;
}

function highlightSelectedText(selection) {
    const selectedText = selection.text;
    const range = new Range();
    const highlightedSpan = document.createElement("span");
    highlightedSpan.classList.add("highlighted");
    range.setStart(selection.anchorNode, selection.startOffset);
    range.setEnd(selection.focusNode, selection.endOffset);
    range.surroundContents(highlightedSpan);
}

