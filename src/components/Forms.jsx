import { Label, TextInput, Checkbox, Button  } from 'flowbite-react'
import React, { useState } from 'react'

const Forms = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
      value={password}
      onChange={(e) => setPassword(e.target.value)}


    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>
    </div>
  )
}

export default Forms

