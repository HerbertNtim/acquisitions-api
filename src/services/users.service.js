import { db } from '#config/database.js';
import logger from '#config/logger.js';
import { users } from '#models/users.model.js';

export const getAllUsers = async() => {
  try {
    return await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      created_at: users.created_at,
      updated_at: users.updated_at,
    });
  } catch (error) {
    logger.error('Error getting users', error);
    throw error;
  }
};
