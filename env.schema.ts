import { defineSchema } from 'dotenv-gad';

export default defineSchema({
  // Add your environment variables here
  DB: {
    type: 'object',
    envPrefix: 'DB_',
    properties: {
      HOST:{
        type: 'string',
        required: true,
        default: 'localhost',
        docs: "database hostname or ip address"
      },
      PORT:{
        type: 'number',
        required: true,
        default: 5432,
        docs: "database port number"
      },
      USER:{
        type: 'string',
        required: true,
        default: 'postgres',
        docs: "database user name"
      },
      PASS:{
        type: 'string',
        required: true,
        docs: "database password"
      },
      SSL:{
        type: 'boolean',
        required: true,
        default: false,
        docs: "database ssl enabled or not"
      },
      NAME:{
        type: 'string',
        required: true,
        docs: "database name"
      }
    }

  },
  SMTP:{
    type: 'object',
    envPrefix: 'SMTP_',
    properties:{
      HOST:{
        type: 'string',
        required: true,
        docs: "smtp hostname or ip address"
      },
      PORT:{
        type: 'number',
        required: true,
        default: 587,
        docs: "smtp port number"
      },
      SECURE:{
        type: 'boolean',
        required: true,
        docs: "smtp secure or not"
      },
      USER:{
        type: 'string',
        required: true,
        docs: "smtp user name"
      },
      PASS:{
        type: 'string',
        required: true,
        docs: "smtp password"
      },
      FROM:{
        type: 'string',
        default:'noreply@suds-tech.com',
        docs: "smtp from address"
      }
    }
  },
  NODE_ENV: {
    type: 'string',
    enum: ['development', 'production', 'test'],
    default: 'development',
    docs: 'application environment'
  },
  ENCRYPTION_KEY:{
    type: 'string',
    required: true,
    sensitive: true
  },
  INTERNAL_EMAIL:{
    type: 'string',
    required: true,
    default: 'info@suds-tech.com',
    docs: "internal email address"
  },
  ALLOWED_ORIGIN:{
    type: 'string',
    default: '*',
    docs: "allowed origin"
  }
});


