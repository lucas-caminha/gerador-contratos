import { Control, Controller } from 'react-hook-form'
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ContractType } from '../types'
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Home, ShoppingCart } from 'lucide-react'

interface SelectContractTypeProps {
  control: Control<any>
}

export function SelectContractType({ control }: SelectContractTypeProps) {
  return (
    <div className="space-y-6">
      <Label htmlFor="contractType" className="text-lg font-semibold">Escolha o tipo de contrato:</Label>
      <Controller
        name="contractType"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger id="contractType" className="w-full">
              <SelectValue placeholder="Selecione o tipo de contrato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="servicos">Prestação de Serviços</SelectItem>
              <SelectItem value="locacao" disabled>Locação (Em Desenvolvimento)</SelectItem>
              <SelectItem value="compravenda" disabled>Compra e Venda (Em Desenvolvimento)</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="flex flex-col items-center p-4">
            <FileText className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold text-center">Prestação de Serviços</h3>
            <p className="text-sm text-center text-gray-600 mt-2">Ideal para freelancers e empresas de serviços</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="flex flex-col items-center p-4">
            <Home className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold text-center">Locação</h3>
            <p className="text-sm text-center text-gray-600 mt-2">Perfeito para aluguéis residenciais ou comerciais</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="flex flex-col items-center p-4">
            <ShoppingCart className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold text-center">Compra e Venda</h3>
            <p className="text-sm text-center text-gray-600 mt-2">Ideal para transações comerciais de bens</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

