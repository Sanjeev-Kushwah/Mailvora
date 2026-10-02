import { PasswordCriteria } from '@/types/auth';

export function checkPasswordCriteria(password: string): PasswordCriteria {
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  };
}

export function isPasswordValid(password: string): boolean {
  const criteria = checkPasswordCriteria(password);
  return criteria.minLength && criteria.hasUppercase && criteria.hasLowercase && criteria.hasNumber;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}
