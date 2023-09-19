export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			todos: {
				Row: {
					created_at: string;
					id: string;
					is_complete: boolean | null;
					title: string | null;
					user_id: string | null;
				};
				Insert: {
					created_at?: string;
					id?: string;
					is_complete?: boolean | null;
					title?: string | null;
					user_id?: string | null;
				};
				Update: {
					created_at?: string;
					id?: string;
					is_complete?: boolean | null;
					title?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'todos_user_id_fkey';
						columns: ['user_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			Users: {
				Row: {
					created_at: string;
					email: string | null;
					id: number;
					name: string | null;
				};
				Insert: {
					created_at?: string;
					email?: string | null;
					id?: number;
					name?: string | null;
				};
				Update: {
					created_at?: string;
					email?: string | null;
					id?: number;
					name?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
