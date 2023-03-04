import { createAuth } from '@redwoodjs/auth-supabase-web'

import supabaseClient from './client'

export const { AuthProvider, useAuth } = createAuth(supabaseClient)
