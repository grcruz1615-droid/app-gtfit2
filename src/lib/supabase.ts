import { createClient } from '@supabase/supabase-js';

// Verificar se as variáveis de ambiente estão configuradas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '⚠️ Variáveis de ambiente do Supabase não configuradas. ' +
    'Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY no arquivo .env.local'
  );
}

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Tipos TypeScript para o banco de dados
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          password_hash: string;
          plan_type: 'basic' | 'premium';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name: string;
          password_hash: string;
          plan_type?: 'basic' | 'premium';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          password_hash?: string;
          plan_type?: 'basic' | 'premium';
          created_at?: string;
          updated_at?: string;
        };
      };
      workout_plans: {
        Row: {
          id: string;
          user_id: string;
          plan_name: string;
          goal: string;
          level: string;
          days_per_week: number;
          exercises: any; // JSONB
          created_at: string;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan_name: string;
          goal: string;
          level: string;
          days_per_week: number;
          exercises: any;
          created_at?: string;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan_name?: string;
          goal?: string;
          level?: string;
          days_per_week?: number;
          exercises?: any;
          created_at?: string;
          is_active?: boolean;
        };
      };
      workout_history: {
        Row: {
          id: string;
          user_id: string;
          workout_plan_id: string;
          exercise_name: string;
          sets: number;
          reps: number;
          weight: number;
          completed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          workout_plan_id: string;
          exercise_name: string;
          sets: number;
          reps: number;
          weight?: number;
          completed_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          workout_plan_id?: string;
          exercise_name?: string;
          sets?: number;
          reps?: number;
          weight?: number;
          completed_at?: string;
        };
      };
      nutrition_logs: {
        Row: {
          id: string;
          user_id: string;
          meal_name: string;
          calories: number;
          protein: number;
          carbs: number;
          fats: number;
          image_url: string | null;
          logged_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          meal_name: string;
          calories: number;
          protein?: number;
          carbs?: number;
          fats?: number;
          image_url?: string | null;
          logged_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          meal_name?: string;
          calories?: number;
          protein?: number;
          carbs?: number;
          fats?: number;
          image_url?: string | null;
          logged_at?: string;
        };
      };
      progress_tracking: {
        Row: {
          id: string;
          user_id: string;
          weight: number;
          body_fat_percentage: number;
          muscle_mass: number;
          notes: string | null;
          measured_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          weight?: number;
          body_fat_percentage?: number;
          muscle_mass?: number;
          notes?: string | null;
          measured_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          weight?: number;
          body_fat_percentage?: number;
          muscle_mass?: number;
          notes?: string | null;
          measured_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan_type: 'basic' | 'premium';
          price: number;
          payment_method: string | null;
          payment_status: 'pending' | 'active' | 'cancelled' | 'expired';
          started_at: string;
          expires_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan_type: 'basic' | 'premium';
          price: number;
          payment_method?: string | null;
          payment_status?: 'pending' | 'active' | 'cancelled' | 'expired';
          started_at?: string;
          expires_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan_type?: 'basic' | 'premium';
          price?: number;
          payment_method?: string | null;
          payment_status?: 'pending' | 'active' | 'cancelled' | 'expired';
          started_at?: string;
          expires_at?: string | null;
          created_at?: string;
        };
      };
      user_feedback: {
        Row: {
          id: string;
          user_id: string;
          workout_plan_id: string;
          rating: number;
          feedback_type: 'like' | 'dislike';
          comments: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          workout_plan_id: string;
          rating?: number;
          feedback_type?: 'like' | 'dislike';
          comments?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          workout_plan_id?: string;
          rating?: number;
          feedback_type?: 'like' | 'dislike';
          comments?: string | null;
          created_at?: string;
        };
      };
    };
  };
};

// Helper functions para operações comuns
export const auth = {
  signUp: async (email: string, password: string, fullName: string) => {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
  },

  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

  signOut: async () => {
    return await supabase.auth.signOut();
  },

  getUser: async () => {
    return await supabase.auth.getUser();
  },
};

// Helper functions para workout plans
export const workoutPlans = {
  create: async (plan: Database['public']['Tables']['workout_plans']['Insert']) => {
    return await supabase.from('workout_plans').insert(plan).select().single();
  },

  getActive: async (userId: string) => {
    return await supabase
      .from('workout_plans')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
  },

  getAll: async (userId: string) => {
    return await supabase
      .from('workout_plans')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
  },
};

// Helper functions para nutrition logs
export const nutritionLogs = {
  create: async (log: Database['public']['Tables']['nutrition_logs']['Insert']) => {
    return await supabase.from('nutrition_logs').insert(log).select().single();
  },

  getToday: async (userId: string) => {
    const today = new Date().toISOString().split('T')[0];
    return await supabase
      .from('nutrition_logs')
      .select('*')
      .eq('user_id', userId)
      .gte('logged_at', `${today}T00:00:00`)
      .lte('logged_at', `${today}T23:59:59`)
      .order('logged_at', { ascending: false });
  },
};

// Helper functions para progress tracking
export const progressTracking = {
  create: async (progress: Database['public']['Tables']['progress_tracking']['Insert']) => {
    return await supabase.from('progress_tracking').insert(progress).select().single();
  },

  getLatest: async (userId: string) => {
    return await supabase
      .from('progress_tracking')
      .select('*')
      .eq('user_id', userId)
      .order('measured_at', { ascending: false })
      .limit(1)
      .single();
  },

  getHistory: async (userId: string, limit = 30) => {
    return await supabase
      .from('progress_tracking')
      .select('*')
      .eq('user_id', userId)
      .order('measured_at', { ascending: false })
      .limit(limit);
  },
};

// Helper functions para subscriptions
export const subscriptions = {
  create: async (subscription: Database['public']['Tables']['subscriptions']['Insert']) => {
    return await supabase.from('subscriptions').insert(subscription).select().single();
  },

  getActive: async (userId: string) => {
    return await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('payment_status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
  },
};
