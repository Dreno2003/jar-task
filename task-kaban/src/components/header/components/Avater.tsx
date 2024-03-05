"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/dropdown-menu/DropDownMenuMain'
import { TbLogout } from "react-icons/tb";
import { signOutUser } from "@/services/auth/firebase";
import { PiUserSwitch } from "react-icons/pi";
import { switchUserAccount } from '@/services/auth/firebase'



import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

interface AvatarInitialProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Used to set the `aria-label` attribute.
   */
  imageSrc?: any
  userNameInitials?: string
  fullName: any
}
const AvaterMain: React.FC<AvatarInitialProps> = ({ userNameInitials, imageSrc, fullName }) => {
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger>
          <Avatar className="size-9">
            <AvatarImage src={imageSrc} />
            <AvatarFallback>{userNameInitials}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="text-left">
          <DropdownMenuLabel>
            {/* user full name */}
            {fullName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={switchUserAccount} >
            {/* switche acct.btn */}
            <div className="!bg-transperent flex" onClick={signOutUser}>
              <PiUserSwitch size={22} className="mr-2" />  <span className="font-thin"> Switch Account
              </span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem >
            {/* log out btn */}
            <div className="!bg-transperent flex" onClick={signOutUser}>
              <TbLogout size={22} className="mr-2 " />  <span className="font-thin"> Sign out</span>
            </div>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>


    </>
  )
}


export { AvaterMain }
