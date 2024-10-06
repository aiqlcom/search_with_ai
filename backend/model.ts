import { IModelInfo } from './interface';

export const Models: IModelInfo[] = [
  {
    platform: 'aliyun',
    type: '',
    models: ['qwen-max', 'qwen-max-0428', 'qwen-turbo', 'qwen-plus']
  },
  {
    platform: 'openai',
    type: 'openai',
    models: ['o1-preview', 'o1-mini', 'gpt-4o', 'gpt-4o-mini', 'gpt-4o-latest', 'gpt-4-preview', 'gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo']
  },
  {
    platform: 'baidu',
    type: 'baidu',
    models: ['eb-instant', 'completions_pro', 'ernie_bot_8k']
  },
  {
    platform: 'google',
    type: 'gemini',
    models: ['gemini-1.0-pro', 'gemini-1.5-pro', 'gemini-1.5-flash']
  },
  {
    platform: 'yi',
    type: 'openai',
    models: ['yi-large', 'yi-large-turbo', 'yi-medium', 'yi-spark']
  },
  {
    platform: 'moonshot',
    type: 'openai',
    models: ['Qwen/Qwen2.5-72B-Instruct', 'meta-llama/Meta-Llama-3.1-70B-Instruct', 'mistralai/Mistral-Nemo-Instruct-2407']
  },
  {
    platform: 'lepton',
    type: 'openai',
    models: ['llama2-7b', 'llama2-13b', 'llama2-70b', 'mixtral-8*7b', 'mixtral-8*22b']
  },
  {
    platform: 'deepseek',
    type: 'openai',
    models: ['deepseek-chat', 'deepseek-coder']
  },
  {
    platform: 'chatglm',
    type: 'openai',
    models: ['glm-4', 'glm-4-plus', 'glm-4-air', 'glm-4-airx', 'glm-4-flash']
  },
  {
    platform: 'tencent',
    type: 'tencent',
    models: ['std', 'pro']
  }
];
