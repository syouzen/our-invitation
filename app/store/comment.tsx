import {create} from 'zustand';
import {Comment} from '@/app/type';
import dayjs from 'dayjs';

interface CommentsState {
  comments: Comment[];
  fetchComments: () => Promise<void>;
  createComment: (
    name: string,
    content: string,
    password: string,
  ) => Promise<void>;
  deleteComment: (id: string, password: string) => Promise<void>;
}

export const useCommentsStore = create<CommentsState>(set => ({
  comments: [],
  fetchComments: async () => {
    const response = await fetch('/api/comments');
    const data: Comment[] = await response.json();
    set({
      comments: data.sort((a, b) =>
        dayjs(a.created_at).isBefore(dayjs(b.created_at)) ? 1 : -1,
      ),
    });
  },
  createComment: async (name, password, content) => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, password, content}),
    });

    const data: Comment[] = await response.json();
    set(state => ({
      comments: [...state.comments, ...data].sort((a, b) =>
        dayjs(a.created_at).isBefore(dayjs(b.created_at)) ? 1 : -1,
      ),
    }));
  },
  deleteComment: async (id, password) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({password}),
    });

    if (response.ok) {
      set(state => ({
        comments: state.comments.filter(comment => comment.id !== id),
      }));
    } else {
      throw new Error('delete error');
    }
  },
}));
