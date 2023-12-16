function searchTeam() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var teamNameInfo = document.getElementById('team-name-result');
    var teamDescription = document.getElementById('team-description-result');
    var linkList = document.getElementById('link-list');

    var teamData = {
        '레알마드리드': '레알 마드리드는 세계적으로 유명하고 잘하는 팀이고 모든 선수들의 꿈의 팀일겁니다.',
        '바르셀로나': '바르셀로나도 레알마드리드 못지않게 유명하고 잘하는 팀이고 슈퍼스타 메시를 발굴한 팀입니다.',
        '맨시티': '맨체스터 시티는 현재 프리미어 리그에서 가장 잘하는 팀이고 펩 과르디올라 감독으로 많은 우승을 하고 있습니다.',
        '맨유': '맨체스터 유나이티드는 과거에는 우승을 많이하는 팀이였지만 현재는 과거에 비해 그렇지 못하고 아쉬운 모습만 보여주고 있습니다.',
        '인테르': '인테르는 이탈리아 클럽 최초이자 유일무이한 트레블을 달성한 명문 클럽입니다 유명스타로는 사네티가 있습니다.',
        '보루시아 도르트문트': '도르트문트는 이영표,지동원,박주호 한국선수들이 뛴 클럽이기도 하고 응원으로도 유명한 클럽입니다.',
        '바이에른뮌헨': '바이에른 뮌헨은 정우영,김민재 선수가 뛰고 뛴 클럽이고 도르트문트와 라이벌인 클럽입니다.',
        '브렌트포드': '이번시즌 김지수 선수가 이적을 하면서 뉴스에도 많이 나오기도 했고 전에 이산이라는 선수가 먼저 이적을 했었기도 했던 팀입니다.',
        '울버햄튼': '황희찬 선수가 있는 팀이기도하고 이번시즌 황희찬선수가 잘하면서 관심이 가고 있는 팀입니다.',
        '토트넘': '이영표 선수가 토트넘에서 선수 생활을 했고 손흥민 선수가 현역으로도 뛰고 있고 또한 잘하면서 우리나라 팬이 매우 많습니다.',
        '슈투트가르트': '흔히 말하는 작은 정우영 선수가 뛰고 있으며 뮌헨에서 데뷔를 했으며 이번 아시안게임에서 득점왕을 하며 유명해졌습니다.',
        '미트윌란': '카타르 월드컵에서 스타가 된 조규성 선수가 이번시즌 이적을 하면서 한국사람들에게 알려지기 시작했습니다 그리고 이한범 선수도 이적을 하기도 했습니다.',
        '츠르베나 즈베즈다': '세르비아에 있는 팀이고 대표팀에서 맹활약하는 황인범 선수가 이번시즌 이적을 하면서 알려졌고 팀에서 최고 이적료로 황인범을 영입을 한 만큼 기대를 받고 있는 선수입니다.',
    };
    if (searchInput && teamData.hasOwnProperty(searchInput)) {
        var teamInfo = teamData[searchInput];
        teamNameInfo.textContent = searchInput;
        teamDescription.textContent = teamInfo;
    
        linkList.innerHTML = "";
        var link = document.createElement('li');
        var a = document.createElement('a');
        a.textContent = '팀 정보 보러 가기';
        a.href = 'https://namu.wiki/w/' + encodeURIComponent(searchInput);
        link.appendChild(a);
        linkList.appendChild(link);
    } else {
        teamNameInfo.textContent = "검색 결과";
        teamDescription.textContent = "다른 팀을 검색하세요.";
        linkList.innerHTML = "";
    }
}

    
    