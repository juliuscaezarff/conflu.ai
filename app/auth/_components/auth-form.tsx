'use client'

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Link from 'next/link'

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulação de login estático
    setTimeout(() => {
      console.log('Login realizado com:', { email, password })
      setIsLoading(false)
      // Aqui você pode adicionar redirecionamento ou outras ações
    }, 1000)
  }

  return (
    <div className="w-full">
      <div className="lg:hidden mb-8 text-center">
        <h1 className="text-2xl font-bold text-foreground">Conflu.ai</h1>
      </div>
      
      <Card className="mx-auto w-[380px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold">
          Login
        </CardTitle>
        <CardDescription>
          Mantenha-se organizado e centralize toda informação
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="mt-3 space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-[#b38a5e] to-[#c3a169] hover:from-[#9a764e] hover:to-[#b38a5e] transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <CardDescription className="text-xs">
          Ao clicar em continuar, você reconhece que leu e concorda com os
          termos da Conflu.ai{' '}
          <Link href={'#'} className="underline">
            Termos de serviço
          </Link>{' '}
          e{' '}
          <Link href='/policy' className="underline">
            Politica de privacidade
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
    </div>
  )
}