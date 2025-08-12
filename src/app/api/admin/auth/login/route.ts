import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // For demo purposes, use hardcoded credentials
    // In production, you would check against database
    if (username === 'admin' && password === 'admin123') {
      // Generate a simple token (in production, use proper JWT)
      const token = 'demo-admin-token-' + Date.now()

      const response = NextResponse.json({
        success: true,
        admin: {
          id: '1',
          username: 'admin',
          email: 'admin@nhahangthu2.com',
          role: 'admin'
        }
      })

      // Set HTTP-only cookie
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 hours
      })

      return response
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
