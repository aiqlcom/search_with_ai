import { BaseOpenAIChat } from './base/openai';
const baseURL = 'https://api2.aiql.com';

export const moonshot = new BaseOpenAIChat('moonshot', process.env.MOONSHOT_KEY, baseURL);
