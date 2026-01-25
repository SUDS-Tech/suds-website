import { defineSchema, loadEnv } from 'dotenv-gad';

export const schema = defineSchema({
  // Add your environment variables here
  DB: {
    type: 'object',
    envPrefix: 'DB_',
    properties: {
      HOST:{
        type: 'string',
        required: true,
        default: 'localhost'
      },
      PORT:{
        type: 'number',
        required: true,
        default: 5432
      },
      USER:{
        type: 'string',
        required: true,
        default: 'postgres'
      },
      PASS:{
        type: 'string',
        required: true,
      },
      SSL:{
        type: 'boolean',
        required: true,
        default: false
      },
      NAME:{
        type: 'string',
        required: true
      }
    }

  },
  SMTP:{
    type: 'object',
    envPrefix: 'SMTP',
    properties:{
      HOST:{
        type: 'string',
        required: true
      },
      PORT:{
        type: 'number',
        required: true,
        default: 587
      },
      SECURE:{
        type: 'boolean',
        required: true
      },
      USER:{
        type: 'string',
        required: true
      },
      PASS:{
        type: 'string',
        required: true
      }
    }
  },
  NODE_ENV: {
    type: 'string',
    enum: ['development', 'production', 'test'],
    default: 'development'
  },
  ENCRYPTION_KEY:{
    type: 'string',
    required: true,
    sensitive: true
  }
});


export const env = loadEnv(schema)