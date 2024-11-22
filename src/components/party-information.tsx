import { Control, Controller } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { PartyType } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"

interface PartyInformationProps {
  control: Control<any>
}

export function PartyInformation({ control }: PartyInformationProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Informações do Contratante</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Controller
            name="contratanteTipo"
            control={control}
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pj" id="contratante-pj" />
                  <Label htmlFor="contratante-pj">Pessoa Jurídica</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pf" id="contratante-pf" />
                  <Label htmlFor="contratante-pf">Pessoa Física</Label>
                </div>
              </RadioGroup>
            )}
          />
          
          <Controller
            name="contratanteNome"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="contratanteNome">Nome/Razão Social do Contratante</Label>
                <Input id="contratanteNome" {...field} className="w-full" />
              </div>
            )}
          />
          
          <Controller
            name="contratanteCpfCnpj"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="contratanteCpfCnpj">CPF/CNPJ do Contratante</Label>
                <Input id="contratanteCpfCnpj" {...field} className="w-full" />
              </div>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informações do Contratado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Controller
            name="contratadoTipo"
            control={control}
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pj" id="contratado-pj" />
                  <Label htmlFor="contratado-pj">Pessoa Jurídica</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pf" id="contratado-pf" />
                  <Label htmlFor="contratado-pf">Pessoa Física</Label>
                </div>
              </RadioGroup>
            )}
          />
          
          <Controller
            name="contratadoNome"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="contratadoNome">Nome/Razão Social do Contratado</Label>
                <Input id="contratadoNome" {...field} className="w-full" />
              </div>
            )}
          />
          
          <Controller
            name="contratadoCpfCnpj"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="contratadoCpfCnpj">CPF/CNPJ do Contratado</Label>
                <Input id="contratadoCpfCnpj" {...field} className="w-full" />
              </div>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Contrato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Controller
            name="valor"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="valor">Valor do Contrato</Label>
                <Input id="valor" {...field} className="w-full" placeholder="R$ 0,00" />
              </div>
            )}
          />
          
          <Controller
            name="prazo"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="prazo">Prazo do Contrato</Label>
                <Input id="prazo" {...field} className="w-full" placeholder="Ex: 12 meses" />
              </div>
            )}
          />

          <Controller
            name="cidade"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input id="cidade" {...field} className="w-full" />
              </div>
            )}
          />

          <Controller
            name="dataContrato"
            control={control}
            render={({ field }) => (
              <DatePicker
              date={field.value}
              setDate={(date) => field.onChange(date)}
            />
            )}
          />
          
          <Controller
            name="clausulasAdicionais"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="clausulasAdicionais">Cláusulas Adicionais (opcional)</Label>
                <Textarea id="clausulasAdicionais" {...field} className="w-full h-32" placeholder="Insira aqui quaisquer cláusulas adicionais ou observações..." />
              </div>
            )}
          />
        </CardContent>
      </Card>
    </div>
  )
}
