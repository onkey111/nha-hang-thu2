import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      )
    }

    // For demo purposes, just check if token exists and starts with our prefix
    if (token.startsWith('demo-admin-token-')) {
      return NextResponse.json({
        success: true,
        admin: {
          id: '1',
          username: 'admin',
          email: 'admin@nhahangthu2.com',
          role: 'admin'
        }
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
