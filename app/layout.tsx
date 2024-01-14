import { Providers } from './providers'

export const metadata = {
  title: 'Edukoya - No.1 Online Learning App for Africans',
  keywords: [
    'Edukoya',
    'Alternative to uLesson',
    'Education',
    'e-Learning',
    'Learning app',
  ],
  themeColor: '#195EF7',
  description:
    'Join Edukoya’s online LIVE classes led by experienced master tutors. Lessons for all subjects and age groups. Exam classes for GCSE, 11+, WAEC, JAMB, IELTS and more.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
