import { createAuth } from '@redwoodjs/auth-supabase-web'

import supabaseClient from './lib/supabase'

export const { AuthProvider, useAuth } = createAuth(supabaseClient)
