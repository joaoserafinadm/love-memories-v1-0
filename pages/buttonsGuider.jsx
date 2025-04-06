import Button from "@/src/components/Button";
import ButtonGroup from "@/src/components/Button/ButtonGroup";
import ThemeToggler from "@/src/components/themeToggle";
import { ChartArea } from "lucide-react";



export default function ButtonsGuider() {
  return (
    <div>
      <div className="p-8 space-y-8">
        <h1 className="text-2xl font-bold mb-6">Exemplos de Botões</h1>
        <ThemeToggler />
        <ChartArea />

        {/* Variantes de cores */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Variantes</h2>
          <div className="flex flex-wrap gap-2">
            <Button >Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="muted">Danger</Button>
          </div>
        </div>

        {/* Tamanhos */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tamanhos</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs" variant="primary">Extra Small</Button>
            <Button size="sm" variant="primary">Small</Button>
            <Button size="md" variant="primary">Medium</Button>
            <Button size="lg" variant="primary">Large</Button>
            <Button size="xl" variant="primary">Extra Large</Button>
          </div>
        </div>

        {/* Botões outline */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Outline</h2>
          <div className="flex flex-wrap gap-2">

              <Button outline>Default</Button>
              <Button outline variant="primary">Primary</Button>
              <Button outline variant="secondary">Primary</Button>
              <Button outline variant="success">Success</Button>
              <Button outline variant="info">Info</Button>
              <Button outline variant="warning">Warning</Button>
              <Button outline variant="danger">Danger</Button>
              <Button outline variant="muted">Danger</Button>
          </div>
        </div>
        {/* Botões outline */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Grupo</h2>
          <div className="flex flex-wrap gap-2">
            <ButtonGroup>

              <Button outline>Default</Button>
              <Button outline variant="primary">Primary</Button>
              <Button outline variant="secondary">Primary</Button>
              <Button outline variant="success">Success</Button>
              <Button outline variant="info">Info</Button>
              <Button outline variant="warning">Warning</Button>
              <Button outline variant="danger">Danger</Button>
              <Button outline variant="muted">Danger</Button>
            </ButtonGroup>
          </div>
        </div>


        {/* Botões pill */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pill Shape</h2>
          <div className="flex flex-wrap gap-2">
            <Button pill variant="primary">Primary Pill</Button>
            <Button pill outline variant="success">Success Outline Pill</Button>
            <Button pill variant="danger">Danger Pill</Button>
          </div>
        </div>

        {/* Largura total */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Full Width</h2>
          <Button fullWidth variant="primary">Full Width Button</Button>
          <Button fullWidth outline variant="info">Full Width Outline</Button>
        </div>

        {/* Botões desabilitados */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Disabled</h2>
          <div className="flex flex-wrap gap-2">
            <Button disabled variant="primary">Disabled Button</Button>
            <Button disabled outline variant="danger">Disabled Outline</Button>
          </div>
        </div>
      </div>
    </div>
  );
}