import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tpoglsbnmkoogjfbjvuk.supabase.co'
const supabaseAnonKey = 'sb_publishable_WhSR8vrNz8XIRkn8__iWsQ_IC_q7k_R'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)