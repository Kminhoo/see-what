export interface GenericComment {
  id: string;
  comment: string;
  created_at: string;
  user_id: string;
  nickname: string;
  related_id?: string;
  musical_id?: string;
  theater_id?: string;
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
  onDelete: (id: string) => void;
  onUpdate: (updatedComment: { id: string; comment: string }) => void; // 추가
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

export interface CommentInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}

export interface CommentUpdateProps {
  commentId: string;
  initialValue: string;
  tableName: 'musical_review' | 'theater_review';
  commentUserId: string;
  nickname: string;
  onUpdate: (updatedComment: { id: string; comment: string }) => void;
  onCancel: () => void;
}
