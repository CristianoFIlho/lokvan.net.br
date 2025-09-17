import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  HStack,
  Icon,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const MotionBox = motion.create(Box)

// Validation schema
const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  company: yup.string(),
  service: yup.string().required('Selecione um serviço'),
  passengers: yup.number().positive('Número deve ser positivo').required('Número de passageiros é obrigatório'),
  date: yup.string().required('Data é obrigatória'),
  time: yup.string(),
  origin: yup.string().required('Local de origem é obrigatório'),
  destination: yup.string().required('Local de destino é obrigatório'),
  duration: yup.string(),
  message: yup.string(),
}).required()

type FormData = yup.InferType<typeof schema>

const services = [
  { value: 'fretamento', label: 'Fretamento' },
  { value: 'turismo', label: 'Viagens e Turismo' },
  { value: 'eventos', label: 'Eventos Corporativos' },
  { value: 'transfer', label: 'Transfer Executivo' },
  { value: 'outros', label: 'Outros' }
]

const durations = [
  { value: 'periodo', label: 'Período (algumas horas)' },
  { value: 'dia-inteiro', label: 'Dia inteiro' },
  { value: '2-3-dias', label: '2-3 dias' },
  { value: 'semana', label: 'Uma semana' },
  { value: 'mais-semana', label: 'Mais de uma semana' }
]

const Quote = () => {
  const toast = useToast()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form data:', data)
      
      toast({
        title: 'Orçamento enviado com sucesso!',
        description: 'Entraremos em contato em breve com sua cotação.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      
      reset()
    } catch (error) {
      toast({
        title: 'Erro ao enviar orçamento',
        description: 'Tente novamente ou entre em contato conosco.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        bgGradient="linear(to-r, lokvan.primary, lokvan.secondary)"
        color="white"
        py={20}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxW="6xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="2xl" fontWeight="bold">
              Solicite seu Orçamento
            </Heading>
            <Text fontSize="xl" maxW="3xl">
              Preencha o formulário abaixo com as informações da sua viagem 
              e receba uma cotação personalizada sem compromisso.
            </Text>
          </VStack>
        </Container>
      </MotionBox>

      {/* Form Section */}
      <Box py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={12}>
            {/* Contact Info */}
            <VStack spacing={8} align="start">
              <VStack spacing={4} align="start">
                <Heading size="lg" color="lokvan.primary">
                  Prefere falar conosco?
                </Heading>
                <Text color="gray.600">
                  Nossa equipe está pronta para atendê-lo e esclarecer 
                  todas as suas dúvidas.
                </Text>
              </VStack>

              <VStack spacing={4} align="start">
                <HStack spacing={3}>
                  <Icon as={FaPhone} color="lokvan.primary" boxSize={5} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">Telefone</Text>
                    <Text color="gray.600">(71) 3333-4444</Text>
                  </VStack>
                </HStack>

                <HStack spacing={3}>
                  <Icon as={FaWhatsapp} color="green.500" boxSize={5} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">WhatsApp</Text>
                    <Text color="gray.600">(71) 99999-8888</Text>
                  </VStack>
                </HStack>

                <HStack spacing={3}>
                  <Icon as={FaEnvelope} color="lokvan.primary" boxSize={5} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">Email</Text>
                    <Text color="gray.600">contato@lokvan.net.br</Text>
                  </VStack>
                </HStack>

                <HStack spacing={3} align="start">
                  <Icon as={FaMapMarkerAlt} color="lokvan.primary" boxSize={5} mt={1} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">Endereço</Text>
                    <Text color="gray.600">
                      RUA SAO MARCOS, 41, SALA 01<br />
                      CENTRO, SIMOES FILHO - BA<br />
                      CEP 43700-000
                    </Text>
                  </VStack>
                </HStack>
              </VStack>

              <VStack spacing={3} align="start" pt={4}>
                <Text fontWeight="bold" color="lokvan.primary">
                  Horário de Atendimento:
                </Text>
                <Text color="gray.600">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h<br />
                  Emergências: 24h via WhatsApp
                </Text>
              </VStack>
            </VStack>

            {/* Quote Form */}
            <Box gridColumn={{ lg: 'span 2' }}>
              <Card shadow="xl">
                <CardBody p={8}>
                  <VStack spacing={6} as="form" onSubmit={handleSubmit(onSubmit)}>
                    <Heading size="lg" color="lokvan.primary" textAlign="center">
                      Dados para Orçamento
                    </Heading>

                    {/* Personal Info */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl isInvalid={!!errors.name}>
                        <FormLabel>Nome Completo *</FormLabel>
                        <Input {...register('name')} />
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.email}>
                        <FormLabel>Email *</FormLabel>
                        <Input type="email" {...register('email')} />
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.phone}>
                        <FormLabel>Telefone/WhatsApp *</FormLabel>
                        <Input {...register('phone')} />
                        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                      </FormControl>

                      <FormControl>
                        <FormLabel>Empresa/Organização</FormLabel>
                        <Input {...register('company')} />
                      </FormControl>
                    </SimpleGrid>

                    {/* Service Info */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl isInvalid={!!errors.service}>
                        <FormLabel>Tipo de Serviço *</FormLabel>
                        <Select placeholder="Selecione um serviço" {...register('service')}>
                          {services.map(service => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </Select>
                        <FormErrorMessage>{errors.service?.message}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.passengers}>
                        <FormLabel>Número de Passageiros *</FormLabel>
                        <Input type="number" {...register('passengers')} />
                        <FormErrorMessage>{errors.passengers?.message}</FormErrorMessage>
                      </FormControl>
                    </SimpleGrid>

                    {/* Date and Time */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl isInvalid={!!errors.date}>
                        <FormLabel>Data da Viagem *</FormLabel>
                        <Input type="date" {...register('date')} />
                        <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
                      </FormControl>

                      <FormControl>
                        <FormLabel>Horário de Saída</FormLabel>
                        <Input type="time" {...register('time')} />
                      </FormControl>
                    </SimpleGrid>

                    {/* Location Info */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl isInvalid={!!errors.origin}>
                        <FormLabel>Local de Origem *</FormLabel>
                        <Input {...register('origin')} placeholder="Endereço de saída" />
                        <FormErrorMessage>{errors.origin?.message}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.destination}>
                        <FormLabel>Local de Destino *</FormLabel>
                        <Input {...register('destination')} placeholder="Endereço de destino" />
                        <FormErrorMessage>{errors.destination?.message}</FormErrorMessage>
                      </FormControl>
                    </SimpleGrid>

                    {/* Duration */}
                    <FormControl>
                      <FormLabel>Duração da Viagem</FormLabel>
                      <Select placeholder="Selecione a duração" {...register('duration')}>
                        {durations.map(duration => (
                          <option key={duration.value} value={duration.value}>
                            {duration.label}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    {/* Additional Info */}
                    <FormControl>
                      <FormLabel>Informações Adicionais</FormLabel>
                      <Textarea
                        {...register('message')}
                        placeholder="Descreva detalhes específicos da sua viagem, necessidades especiais, paradas adicionais, etc."
                        rows={4}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      variant="lokvan"
                      size="lg"
                      w="full"
                      isLoading={isSubmitting}
                      loadingText="Enviando..."
                    >
                      Solicitar Orçamento Gratuito
                    </Button>

                    <Text fontSize="sm" color="gray.500" textAlign="center">
                      * Campos obrigatórios. Seus dados estão seguros conosco.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="4xl">
          <VStack spacing={8} textAlign="center">
            <Heading size="xl" color="lokvan.primary">
              Por que solicitar orçamento conosco?
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  title: 'Resposta Rápida',
                  description: 'Retornamos em até 2 horas'
                },
                {
                  title: 'Sem Compromisso',
                  description: 'Orçamento totalmente gratuito'
                },
                {
                  title: 'Preço Justo',
                  description: 'Melhor custo-benefício da região'
                }
              ].map((benefit, index) => (
                <VStack key={index} spacing={3}>
                  <Text fontSize="lg" fontWeight="bold" color="lokvan.primary">
                    {benefit.title}
                  </Text>
                  <Text color="gray.600">{benefit.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Quote