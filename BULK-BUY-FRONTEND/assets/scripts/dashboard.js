let analysisBar = document.querySelector("#analysis-bar");
analysisBar.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});

function showRangeProgress(rangeVal) {
    rangeVal.style.setProperty('--range-width', rangeVal.value + '%');
    // console.log(rangeVal);
}