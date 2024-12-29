export interface GenericComment {
  id: string;
  comment: string;
  user_id: string;
  created_at: string;
  related_id: string; // musical_id 또는 theater_id
  nickname: string;
}

export interface CommentFormProps {
  relatedId: string;
  tableName: 'musical_review' | 'theater_review';
  onCommentAdded: (newComment: GenericComment) => void;
}

export interface CommentSectionProps {
  relatedId: string;
  tableName: 'musical_review' | 'theater_review';
}

export interface CommentListProps {
  comments: GenericComment[];
  tableName: 'musical_review' | 'theater_review';
}

export interface UserData {
  id: string;
  email: string;
  nickname: string;
  profile_image: string | null;
  created_at: string;
}

export interface CommentDeleteProps {
  commentId: string;
  commentUserId: string;
  tableName: 'musical_review' | 'theater_review';
  onDelete: (id: string) => void;
}
