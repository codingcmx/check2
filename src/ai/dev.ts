import { config } from 'dotenv';
config();

import '@/ai/flows/daily-summary.ts';
import '@/ai/flows/intent-recognition.ts';
import '@/ai/flows/process-whatsapp-message-flow.ts';
