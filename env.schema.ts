import { defineSchema } from 'dotenv-gad';

export default defineSchema({
  FIREBASE:{
    type: 'object',
    envPrefix: 'FIREBASE_',
    properties:{
      PROJECT_ID:{
        type: 'string',
        required: true,
      },
      CLIENT_EMAIL:{
        type: 'string',
        required: true,
      },
      PRIVATE_KEY:{
        type: 'string',
        required: true,
        transform: (value) => value.replace(/\\n/g, '\n'),
      }
    }
  },
  RESEND:{
    type: 'object',
    envPrefix: 'RESEND_',
    properties:{
      API_KEY:{
        type: 'string',
        required: true,
      }
    }
  },
  NOTIFICATION_EMAIL:{
    type: 'string',
    default: 'info@suds-tech.com',
    docs: 'email address for contact form notifications'
  },
  ALLOWED_ORIGINS:{
    type: 'string',
    default: '*',
    docs: 'allowed CORS origins'
  },
  NODE_ENV:{
    type: 'string',
    enum: ['development', 'production', 'test'],
    default: 'development',
    docs: 'application environment'
  }
});
