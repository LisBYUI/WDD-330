class CommentModel {
    constructor(name = null, content = '', type = 'hike') {
        this.name = name;
        this.content = content;
        this.date = new Date();
        this.type = type;
        this.commentList = this.readFromLS('comments') || [];
    }

    readFromLS(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    writeToLS(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    getAllComments() {
        return this.commentList;
    }

    addComment(name, content) {
        const newComment = new CommentModel(name, content);
        this.commentList.push(newComment);
        this.writeToLS('comments', this.commentList);
    }
}

class CommentView {

    renderCommentUI(element) {
        element.innerHTML = `
            <div class="addComment"
                <h2>Add a comment</h2>
                <input type="text" id="comment-entry">
                <button id="add-comment">Comment</button>
            </div>`;
    }
}

export default class Comment {
    constructor() {
        this.model = new CommentModel();
        this.view = new CommentView();
    }
    addCommentListener(name) {
        document.querySelector('#add-comment').onclick = () => {
            const content = document.querySelector('#comment-entry').value;
            this.model.addComment(name, content);
            document.querySelector('#comment-entry').value = '';
        }
    }

    getCommentList() {
        return this.model.getAllComments();
    }

    displayCommentView(element) {
        return this.view.renderCommentUI(element);
    }
}