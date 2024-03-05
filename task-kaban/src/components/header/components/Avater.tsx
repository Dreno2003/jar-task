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


import { cn } from "@/lib/utils"
import { Button } from "@/components/button/button"

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
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={imageSrc} />
            <AvatarFallback>{userNameInitials}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-left">
          <DropdownMenuLabel>
            {/* user full name */}
            {fullName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="hidden">
            {/* switche acct.btn */}
          </DropdownMenuItem>

          <DropdownMenuItem >
            {/* log out btn */}
            <Button variant='plain' className="!bg-transperent" onClick={signOutUser}>
              <TbLogout size={23} className="mr-2" />  Sign out
            </Button>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>


    </>
  )
}


export { AvaterMain }
