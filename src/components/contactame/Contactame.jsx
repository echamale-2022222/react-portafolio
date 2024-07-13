import React from 'react'

export const Contactame = () => {
    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Contáctanos</CardTitle>
                <CardDescription>Llena el formulario y nos pondremos en contacto contigo.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input id="subject" placeholder="Describe el motivo de tu mensaje" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea id="message" placeholder="Escribe tu mensaje aquí" className="min-h-[150px]" />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" type="reset">
                    Limpiar
                </Button>
                <Button type="submit">Enviar</Button>
            </CardFooter>
        </Card>
    )
}
