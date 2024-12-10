import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App1() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <Card className="w-[550px]">
          <CardHeader className="text-center">
            <CardTitle>CURRENCY CONVERTER</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col flex-grow space-y-1.5">
                    {/* <Label htmlFor="name">Name</Label> */}
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col flex-grow space-y-1.5">
                    {/* <Label htmlFor="framework">Framework</Label> */}
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>SWAP</Button>
          </CardFooter>
          <CardContent>
            <form>
              <div className="grid w-full gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col flex-grow space-y-1.5">
                    {/* <Label htmlFor="name">Name</Label> */}
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col flex-grow space-y-1.5">
                    {/* <Label htmlFor="framework">Framework</Label> */}
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App1;
