// 댓글 등록 버튼 클릭 시 실행
document.getElementById('button').addEventListener('click', function() {
  // 댓글 입력값 가져오기
  const commentText = document.getElementById('commentText').value.trim();

  // 댓글 입력값이 비어 있지 않으면
  if (commentText !== '') {
    // 댓글 목록을 가져옴
    const commentList = document.getElementById('commentList');

    // 새로운 댓글 항목 생성
    const newComment = document.createElement('li');
    newComment.classList.add('comment-item');
    
    // 댓글 내용 추가
    newComment.innerHTML = `
      <div class="comment-author">방문자</div>
      <div class="comment-content">${commentText}</div>
    `;

    // 댓글 목록에 새 댓글 추가
    commentList.appendChild(newComment);

    // 댓글 입력란 비우기
    document.getElementById('commentText').value = '';
  } else {
    alert('댓글을 입력해주세요.');
  }
});

// 댓글 취소 버튼 클릭 시 입력란 초기화
document.getElementById('reset').addEventListener('click', function() {
  document.getElementById('commentText').value = '';
});