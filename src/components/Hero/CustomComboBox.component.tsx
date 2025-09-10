'use client'
import { useSetCookie } from 'cookies-next'
import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Company } from '@/payload-types'

export function CustomComboBox({ teams }: { teams: Company[] }) {
  const router = useRouter()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])
  const setCookie = useSetCookie()
  React.useEffect(() => {
    if (typeof activeTeam === 'object' && activeTeam !== null) {
      setCookie('activeCompany', activeTeam.id)
      router.refresh()
    }
  }, [activeTeam, setCookie])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="max-w-[200px]">
        <Button
          size="lg"
          className="bg-transparent text-black shadow-none hover:cursor-pointer hover:bg-transparent"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-transparent text-black">
            <Image
              src={
                typeof activeTeam.logo === 'string' ? activeTeam.logo : activeTeam.logo?.url || ''
              }
              alt={activeTeam.title}
              width={32}
              height={32}
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{activeTeam.title}</span>
            <span className="truncate text-xs font-light">QR system</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="start"
        side={'bottom'}
        sideOffset={4}
      >
        {teams.map(
          (team) =>
            team && (
              <DropdownMenuItem
                key={team.id}
                onClick={() => {
                  setActiveTeam(team)
                }}
                className="gap-2 p-2 hover:cursor-pointer"
              >
                <div className="flex size-6 items-center justify-center rounded-md">
                  <Image
                    src={typeof team.logo === 'string' ? team.logo : team.logo?.url || ''}
                    alt={team.title}
                    width={24}
                    height={24}
                  />
                </div>
                {team.title}
              </DropdownMenuItem>
            ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
