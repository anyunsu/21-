window.onload = function () {
    showTeamInfo();
};
function showTeamInfo() {
    var teamNameInfo = document.getElementById('team-name-info');
    var teamDescriptionInfo = document.getElementById('team-description-info');

    var urlParams = new URLSearchParams(window.location.search);
    var teamName = urlParams.get('team');

    if (teamName) {
        teamNameInfo.textContent = teamName;
        teamDescriptionInfo.textContent = "축구팀에 대한 추가 정보가 여기에 표시됩니다.";
    } else {
        teamNameInfo.textContent = "팀 정보 없음";
        teamDescriptionInfo.textContent = "팀 정보를 찾을 수 없습니다.";
    }
}
