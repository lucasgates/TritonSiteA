import React, { useState } from 'react';
import {
  Target,
  FileSearch,
  Brain,
  CheckCircle,
  AlertTriangle,
  Network,
  Lock,
  Shield,
  Globe,
  Server,
  Database,
  Code,
  Users,
} from 'lucide-react';
import { Modal } from './components/Modal';

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
      <div className="text-3xl font-bold text-triton-accent mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-triton-accent/20">
      <Icon className="w-12 h-12 text-triton-accent mb-4" />
      <h3 className="text-xl font-bold mb-2 text-triton-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ThreatCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-triton-dark p-6 rounded-xl text-white border border-triton-accent/20">
      <Icon className="w-8 h-8 text-triton-accent mb-3" />
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative bg-triton-dark text-white overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block">
              <img
                src="https://lucasgates.github.io/TRITON%20LOGOTIPOS-01.png"
                alt="Triton Infosec"
                className="w-[400px] mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-triton-light">
            Seu negócio está realmente preparado...
            </h1>
            <p className="text-xl text-triton-light mb-12 max-w-3xl mx-auto">
              para atender clientes exigentes e cumprir normas de segurança?
            </p>

            <p className="text-xl text-triton-light mb-12 max-w-3xl mx-auto">
              O cenário atual, segurança digital não é apenas uma escolha – é um
              requisito. Empresas que lidam com dados críticos precisam atender
              normas de conformidade, evitar riscos regulatórios e garantir a
              confiança do mercado.
            </p>

            <p className="text-xl text-triton-light mb-12 max-w-3xl mx-auto">
              Clientes corporativos exigem cada vez mais que seus fornecedores
              comprovem que estão protegendo informações sensíveis e adotando
              boas práticas de segurança. Sua empresa está pronta para essa
              validação?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="bg-triton-button hover:bg-triton-button/90 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative -mt-8">
        <div className="container mx-auto px-4">
          <div className="stats-grid max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <StatCard number="6" label="Paises que atuamos" />
            <StatCard number="300+" label="Alunos treinados" />
            <StatCard number="16+" label="Certificados Cyber Security" />
            <StatCard number="100%" label="Clientes Satisfeitos" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-triton-dark">
            Por Que Escolher a Triton Infosec
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Nossa abordagem única combina expertise técnica com compreensão
            profunda das necessidades empresariais
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={Shield}
              title="Especialistas em Pentest Black Box"
              description="Ao contrário de empresas que oferecem diversos serviços de cybersegurança, a Triton é especializada em pentest, garantindo um serviço mais profundo e focado."
            />
            <ServiceCard
              icon={Brain}
              title="Equipe Altamenta Certificada"
              description="Desenvolvimento pessoal é importante para nós. Por isso, nossos profissionais possuem certificados como OSCP, GAWN, GWAPT, e mais."
            />
            <ServiceCard
              icon={FileSearch}
              title="Relatórios Estratégicos e Acionáveis"
              description="Insights claros tanto para times técnicos quanto para tomadores de decisão."
            />
            <ServiceCard
              icon={Globe}
              title="Metodologia Eficiente"
              description="Análise detalhada, sem burocracia e sem interrupção nas suas operações."
            />
            <ServiceCard
              icon={CheckCircle}
              title="Conformidade Como Prioridade"
              description="Pentest para conformidade com LGPD, ISO 27001, PCI DSS, SOC 2 e outras regulamentações."
            />
            <ServiceCard
              icon={Target}
              title="Redução de Barreiras Comerciais"
              description="Ajudamos sua empresa a cumprir requisitos exigidos por grandes clientes e parceiros."
            />
          </div>
        </div>
      </section>

      {/* Current Threats Section */}
      <section className="bg-gradient-to-b from-triton-dark to-triton-dark/95 text-white py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Porque um Pentest?
          </h2>
          <p className="text-xl text-triton-light text-center mb-8 max-w-3xl mx-auto">
            Empresas sem segurança perdem Negócios e correm riscos reais
            Empresas que não demonstram maturidade em segurança enfrentam
            barreiras comerciais, sanções regulatórias e ameaças cibernéticas
            cada vez mais sofisticadas.
          </p>
          <p className="text-xl text-triton-light text-center mb-8 max-w-3xl mx-auto">
            Evite problemas como:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ThreatCard
              icon={Server}
              title="Perder Contratos"
              description="Dificuldade para fechar contratos com grandes clientes que exigem auditorias de segurança."
            />
            <ThreatCard
              icon={Database}
              title="Falta de Conformidade"
              description="Risco de não conformidade com regulamentações como LGPD, ISO 27001 e PCI DSS."
            />
            <ThreatCard
              icon={Code}
              title="Data Breach"
              description="Exposição a ataques cibernéticos que podem comprometer dados críticos e operações."
            />
            <ThreatCard
              icon={Users}
              title="Danos de Reputação"
              description="Impacto na reputação e credibilidade da empresa em caso de vazamento de informações."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-triton-dark">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Soluções abrangentes de teste de pentest para proteger cada aspecto
            do seu negócio
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-xl shadow-lg">
              <Network className="w-12 h-12 text-triton-accent mb-4" />
              <h3 className="text-xl font-bold mb-4 text-triton-dark">
                Pentest Black Box
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Simulação de ataque hacker.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Teste de perímetro externo e/ou interno.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Phishing customizado.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Análise de vulnerabilidades inclusa.
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-xl shadow-lg">
              <Lock className="w-12 h-12 text-triton-accent mb-4" />
              <h3 className="text-xl font-bold mb-4 text-triton-dark">
                Teste de Intrusão Aplicações Web (Gray Box)
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Avaliação OWASP WSTG.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Teste de segurança de API.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Revisão de autenticação.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Teste de lógica de negócios.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Retest grátis.
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-xl shadow-lg">
              <AlertTriangle className="w-12 h-12 text-triton-accent mb-4" />
              <h3 className="text-xl font-bold mb-4 text-triton-dark">
                Teste de Aplicativos Móveis
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Avaliação iOS e Android.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Teste de API móvel.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Revisão de armazenamento.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Análise em tempo de execução.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-triton-button mr-2" />
                  Retest grátis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-triton-dark text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="relative container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Faça seu orçamento</h2>
          <p className="text-xl text-triton-light mb-12 max-w-2xl mx-auto">
            Sua empresa precisa estar segura e em conformidade – nós garantimos
            que isso aconteça com eficiência e credibilidade.
          </p>

          <button
            onClick={openModal}
            className="bg-triton-button hover:bg-triton-button/90 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Fale com um especialista agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-triton-gray text-gray-400 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <img
              src="https://lucasgates.github.io/TRITON%20LOGOTIPOS-01.png"
              alt="Triton Infosec"
              className="w-[300px] mx-auto mb-4 filter brightness-75"
            />
            <p className="text-sm max-w-md mx-auto">
              Líder em serviços de pentest e avaliação de segurança para
              empresas que valorizam a proteção de seus ativos digitais.
            </p>
          </div>
          <div className="text-center">
            <p>© 2025 Triton Infosec. Todos os direitos reservados. </p>
            <p>
              <a href="https://www.tritoninfosec.com.br/privacidade?_gl=1*11fcot0*_gcl_au*Mjg1NjI0OTU1LjE3MzY1MTQ5MjU.">
                Politica de Privacidade
              </a>{' '}
            </p>
          </div>
        </div>
      </footer>

      {/* Pipefy Form Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          width="460"
          height="780"
          src="https://app.pipefy.com/public/form/mYC1I99v?embedded=true"
          frameBorder="0"
          className="w-full"
        />
      </Modal>
    </div>
  );
}

export default App;
