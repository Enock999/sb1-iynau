export interface AIBot {
  id: string;
  name: string;
  description: string;
  prompt: string;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  config: {
    temperature: number;
    maxTokens: number;
    model: string;
    systemPrompt: string;
    contextWindow: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
    stopSequences: string[];
    responseFormat: ResponseType;
    imageConfig?: {
      size: '256x256' | '512x512' | '1024x1024';
      style: 'natural' | 'artistic' | 'graphic';
      quality: 'standard' | 'hd';
    };
    codeConfig?: {
      language: string;
      framework?: string;
      formatting: 'prettier' | 'standard' | 'none';
    };
  };
  metrics: AIBotMetrics;
  testResults: AIBotTestResult[];
  performance: BotPerformance;
  feedback: BotFeedback[];
}

export type ResponseType = 'text' | 'image' | 'code' | 'mixed';

export interface AIBotResponse {
  id: string;
  botId: string;
  input: string;
  output: ResponseOutput;
  timestamp: Date;
  userId: string;
  processingTime: number;
  tokenCount: number;
  error?: string;
  feedback?: UserFeedback;
}

export interface ResponseOutput {
  type: ResponseType;
  content: string | ImageOutput | CodeOutput | MixedOutput;
}

export interface ImageOutput {
  url: string;
  alt: string;
  metadata: {
    size: string;
    format: string;
    style: string;
  };
}

export interface CodeOutput {
  code: string;
  language: string;
  explanation?: string;
}

export interface MixedOutput {
  text?: string;
  images?: ImageOutput[];
  code?: CodeOutput;
}

export interface AIBotMetrics {
  totalRequests: number;
  averageResponseTime: number;
  errorRate: number;
  lastUpdated: Date;
  dailyUsage: {
    date: string;
    requests: number;
    errors: number;
    avgResponseTime: number;
    responseTypes: Record<ResponseType, number>;
  }[];
  userSatisfaction: number;
  responseDistribution: Record<ResponseType, number>;
  peakUsageHours: Record<number, number>;
  userRetentionRate: number;
}

export interface BotPerformance {
  cpuUsage: number;
  memoryUsage: number;
  latency: number;
  concurrentUsers: number;
  queueLength: number;
  cacheHitRate: number;
  optimizationScore: number;
  lastOptimization: Date;
  resourceUtilization: {
    timestamp: Date;
    cpu: number;
    memory: number;
    requests: number;
  }[];
}

export interface UserFeedback {
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  category: 'accuracy' | 'speed' | 'clarity' | 'usefulness';
  timestamp: Date;
}

export interface BotFeedback {
  id: string;
  responses: number;
  averageRating: number;
  feedbackCount: number;
  categories: {
    accuracy: number;
    speed: number;
    clarity: number;
    usefulness: number;
  };
  recentFeedback: UserFeedback[];
  suggestions: string[];
}