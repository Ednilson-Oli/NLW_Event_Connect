import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/Logo.svg'
import cooper from '../../assets/Medal_cooper.svg'
import gold from '../../assets/Medal_gold.svg'
import silver from '../../assets/Medal_silver.svg'

export default function InvitePage() {
  return (
    <div className="min-h-dvh items-center justify-between gap-16 flex flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para o seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É sò compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>

            <InputField
              readOnly
              defaultValue="http://localhost:3000/invite/1231231414"
            />
            <IconButton className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </InputRoot>

          <div className="grid gap-3 md:grid-cols-3">
            <div className=" relative bg-gray-700 border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                {' '}
                Acessos ao link
              </span>
              <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>
            <div className="relative bg-gray-700 border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                875
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                {' '}
                Inscrições feitas
              </span>
              <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>
            <div className="relative bg-gray-700 border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                2º
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                {' '}
                Posição no ranking
              </span>
              <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de indicações
        </h2>

        <div className="space-y-4">
          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className=" text-sm text-gray-300 leading-none">
              <span className="font-semibold"> 1º</span> | Diego fernandes
            </span>
            <span className=" font-heading text-2xl font-semibold text-gray-200 leading-none">
              1013
            </span>
            <Image src={gold} alt="gold" className="absolute top-0 right-8" />
          </div>
          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className=" text-sm text-gray-300 leading-none">
              <span className="font-semibold"> 2º</span> | Diego fernandes
            </span>
            <span className=" font-heading text-2xl font-semibold text-gray-200 leading-none">
              1013
            </span>
            <Image src={silver} alt="gold" className="absolute top-0 right-8" />
          </div>
          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className=" text-sm text-gray-300 leading-none">
              <span className="font-semibold"> 3º</span> | Diego fernandes
            </span>
            <span className=" font-heading text-2xl font-semibold text-gray-200 leading-none">
              1013
            </span>
            <Image src={cooper} alt="gold" className="absolute top-0 right-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
