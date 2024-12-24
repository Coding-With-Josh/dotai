import "next-auth"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string
      email: string
      emailVerified?: Date
      image?: string
      role?: string
      preferences?: Preferences
      hasCompletedOnboarding?: boolean
      accounts?: Account[]
      sessions?: Session[]
      authenticator?: Authenticator[]
      wallets?: Wallet[]
      transactions?: Transaction[]
      notifications?: Notification[]
      jobPosts?: Job[]
      applications?: Application[]
      portfolio?: Portfolio
      daoMemberships?: DaoMembership[]
      votes?: Vote[]
      gamingStats?: GamingStats[]
      achievements?: UserAchievement[]
      badges?: UserBadge[]
      projects?: Project[]
      connectJobs?: ConnectJob[]
      createdGames?: Game[]
      leaderboards?: Leaderboard[]
      createdAt: Date
      updatedAt: Date
      // ...other fields from User model if needed
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    name?: string
    email: string
    emailVerified?: Date
    image?: string
    role?: Role
    preferences?: Preferences
    hasCompletedOnboarding?: boolean
    accounts?: Account[]
    sessions?: Session[]
    authenticator?: Authenticator[]
    wallets?: Wallet[]
    transactions?: Transaction[]
    notifications?: Notification[]
    jobPosts?: Job[]
    applications?: Application[]
    portfolio?: Portfolio
    daoMemberships?: DaoMembership[]
    votes?: Vote[]
    gamingStats?: GamingStats[]
    achievements?: UserAchievement[]
    badges?: UserBadge[]
    projects?: Project[]
    connectJobs?: ConnectJob[]
    createdGames?: Game[]
    leaderboards?: Leaderboard[]
    createdAt: Date
    updatedAt: Date
    // ...other fields from User model if needed
  }
}

// Extend the default JWT interface
declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role?: string
    // ...other fields from User model if needed
  }
}

// Define other types
interface Preferences {
  id: string
  userId: string
  theme: string
  notifications: boolean
  frequency: NotificationFrequency
}

interface Account {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token?: string
  access_token?: string
  expires_at?: number
  token_type?: string
  scope?: string
  id_token?: string
  session_state?: string
}

interface Authenticator {
  id: string
  credentialID: string
  userId: string
  providerAccountId: string
  credentialPublicKey: string
  counter: number
  credentialDeviceType: string
  credentialBackedUp: boolean
  transports?: string
}

interface Wallet {
  id: string
  userId: string
  address: string
  network: NetworkType
  balance: number
}

interface Transaction {
  id: string
  walletId: string
  userId: string
  type: TransactionType
  amount: number
  recipient: string
  status: TransactionStatus
  carbonScore?: TransactionCarbonScore
}

interface Notification {
  id: string
  userId: string
  content: string
  read: boolean
  type: NotificationType
}

interface ConnectJob {
  id: string
  title: string
  description: string
  employerId: string
  candidateId?: string
  status: string
  smartContractId?: string
}

interface Job {
  id: string
  creatorId: string
  title: string
  description: string
  budget: number
  status: Status
}

interface Application {
  id: string
  jobId: string
  applicantId: string
  coverLetter: string
  status: Status
}

interface Portfolio {
  id: string
  userId: string
  description: string
  projects: Project[]
}

interface DaoMembership {
  id: string
  userId: string
  daoId: string
  role: string
}

interface Vote {
  id: string
  proposalId: string
  userId: string
  decision: string
}

interface GamingStats {
  id: string
  userId: string
  gameId: string
  score: number
  playTime: number
  lastPlayed: Date
}

interface UserAchievement {
  id: string
  userId: string
  achievementId: string
  progress: number
  type: AchievementType
  earnedAt: Date
}

interface UserBadge {
  id: string
  userId: string
  badgeName: string
  description: string
  criteria: string[]
  icon: string
  earnedAt: Date
}

interface Project {
  id: string
  creatorId: string
  title: string
  description: string
  repositoryUrl: string
  tags: string[]
  status: Status
}

interface Game {
  id: string
  name: string
  description: string
  developerId?: string
  categories: string[]
  releaseDate?: Date
  rating: number
  downloads: number
  website?: string
  trailerLink?: string
}

interface Leaderboard {
  id: string
  gameId: string
  userId: string
  score: number
  rank?: number
}

interface TransactionCarbonScore {
  id: string
  transactionId: string
  carbonEmission: number
}

enum Role {
  ADMIN,
  USER
}

enum Status {
  PENDING,
  ACTIVE,
  COMPLETED
}

enum NotificationFrequency {
  REALTIME,
  DAILY,
  WEEKLY
}

enum NotificationType {
  TRANSACTION,
  DAO_UPDATE,
  SYSTEM_ALERT
}

enum NetworkType {
  SOLANA,
  ETHEREUM
}

enum TransactionType {
  SEND,
  RECEIVE,
  STAKE,
  UNSTAKE
}

enum TransactionStatus {
  PENDING,
  SUCCESS,
  FAILED
}

enum AchievementType {
  GAMING,
  PLATFORM,
  DAO
}