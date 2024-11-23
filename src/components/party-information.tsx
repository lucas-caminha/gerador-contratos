import { Control, Controller, useWatch } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"
import ufs from '../data/UFS'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IMaskInput } from 'react-imask'

interface PartyInformationProps {
  control: Control<any>
}

export function PartyInformation({ control }: PartyInformationProps) {
  const contratanteTipo = useWatch({
    control,
    name: 'contratanteTipo',
    defaultValue: 'pj',
  })

  const contratadoTipo = useWatch({
    control,
    name: 'contratadoTipo',
    defaultValue: 'pj',
  })

  const getDocumentMask = (tipo: string) => {
    return tipo === 'pf' ? '000.000.000-00' : '00.000.000/0000-00'
  }

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
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label htmlFor="contratanteCpfCnpj">
                    {contratanteTipo === 'pf' ? 'CPF' : 'CNPJ'} do Contratante
                  </Label>
                  <IMaskInput
                    mask={getDocumentMask(contratanteTipo)}
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              )}
            />
          </div>
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
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label htmlFor="contratadoCpfCnpj">
                    {contratadoTipo === 'pf' ? 'CPF' : 'CNPJ'} do Contratado
                  </Label>
                  <IMaskInput
                    mask={getDocumentMask(contratadoTipo)}
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              )}
            />
          </div>
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
                <Input id="valor" type='text' {...field} className="w-full" placeholder="R$ 0,00" />
              </div>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="prazo"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="prazo">Prazo do Contrato</Label>
                  <Input id="prazo" {...field} className="w-full" placeholder="Ex: 12" />
                </div>
              )}
            />

            <Controller
              name="prazoUnidade"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="prazoUnidade">Unidade do Prazo</Label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="prazoUnidade" className="w-full">
                      <SelectValue placeholder="Selecione a unidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-">-</SelectItem>
                      <SelectItem value="dias">dias</SelectItem>
                      <SelectItem value="meses">meses</SelectItem>
                      <SelectItem value="anos">anos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="dtInicialPrazo"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="dtInicialPrazo">Data inicial do prazo</Label>
                  <DatePicker
                    date={field.value}
                    setDate={(date) => field.onChange(date)}
                  />
                </div>
              )}
            />

            <Controller
              name="dtFinalPrazo"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="dtFinalPrazo">Data final do prazo</Label>
                  <DatePicker
                    date={field.value}
                    setDate={(date) => field.onChange(date)}
                  />
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller 
              name='uf'
              control={control}
              render={({field}) => (
                <div className="space-y-2">
                  <Label htmlFor="uf">UF</Label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="contractType" className="w-full">
                      <SelectValue placeholder="Selecione a UF" />
                    </SelectTrigger>
                    <SelectContent>
                      {ufs.map((uf) => (
                      <SelectItem value={uf.nome} key={uf.sigla}>{uf.nome}</SelectItem>               
                      ))}
                    </SelectContent>
                  </Select>             
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
          </div>

          <Controller
            name="dataContrato"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                <Label htmlFor="dataContrato">Data do Contrato</Label>
                <DatePicker
                  date={field.value}
                  setDate={(date) => field.onChange(date)}
                />
              </div>
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

