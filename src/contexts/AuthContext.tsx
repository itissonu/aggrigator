import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthState, UserRole } from '@/lib/mockData';

interface AuthContextType {
  auth: AuthState;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const roleUsers: Record<UserRole, AuthState['user']> = {
  aggregator: { name: 'Rajesh Kumar', company: 'Ola' },
  officer: { name: 'Dr. Priya Sharma', designation: 'Deputy Transport Commissioner' },
  enforcement: { name: 'Inspector Vikram Singh', designation: 'Enforcement Wing' },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({ isLoggedIn: false, role: 'aggregator', user: null });

  const login = (role: UserRole) => setAuth({ isLoggedIn: true, role, user: roleUsers[role] });
  const logout = () => setAuth({ isLoggedIn: false, role: 'aggregator', user: null });

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
