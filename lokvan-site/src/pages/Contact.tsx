import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  HStack,
  Icon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram
} from 'react-icons/fa'

const MotionBox = motion.create(Box)
const MotionCard = motion.create(Card)

// Simple contact form schema
const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  subject: yup.string().required('Assunto é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
}).required()


const contactInfo = [
  {
    icon: FaPhone,
    title: 'Telefone Fixo',
    info: '+55 71 999655-9262',
    color: 'lokvan.primary',
    action: 'tel:+5571996559262'
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    info: '+55 71 99655-9262',
    color: 'green.500',
    action: 'https://wa.me/557196559262'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    info: 'contato@lokvan.net.br',
    color: 'lokvan.primary',
    action: 'mailto:contato@lokvan.net.br'
  },
  {
    icon: FaInstagram,
    title: 'Instagram',
    info: '@lokvan_transportes',
    color: 'pink.500',
    action: '#'
  }
]

const Contact = () => {
  const toast = useToast()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Contact form data:', data)
      
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      
      reset()
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Tente novamente ou entre em contato por telefone.',
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
              Entre em Contato
            </Heading>
            <Text fontSize="xl" maxW="3xl">
              Estamos aqui para tirar suas dúvidas, fazer orçamentos 
              e ajudar você a ter a melhor experiência de transporte.
            </Text>
          </VStack>
        </Container>
      </MotionBox>

      {/* Contact Info Cards */}
      <Box py={16}>
        <Container maxW="6xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="lokvan.primary">
                Fale Conosco
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Escolha a forma que preferir para entrar em contato
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {contactInfo.map((contact, index) => (
                <MotionCard
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                  cursor="pointer"
                  onClick={() => {
                    if (contact.action.startsWith('http') || contact.action.startsWith('mailto') || contact.action.startsWith('tel')) {
                      window.open(contact.action, '_blank')
                    }
                  }}
                >
                  <CardBody textAlign="center" p={6}>
                    <VStack spacing={4}>
                      <Box
                        bg={contact.color}
                        p={4}
                        rounded="full"
                        color="white"
                      >
                        <Icon as={contact.icon} boxSize={6} />
                      </Box>
                      <VStack spacing={2}>
                        <Text fontWeight="bold" color="lokvan.primary">
                          {contact.title}
                        </Text>
                        <Text color="gray.600" fontSize="sm">
                          {contact.info}
                        </Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form and Address */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            {/* Contact Form */}
            <Card shadow="lg">
              <CardBody p={8}>
                <VStack spacing={6} as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Heading size="lg" color="lokvan.primary" textAlign="center">
                    Envie uma Mensagem
                  </Heading>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <FormControl isInvalid={!!errors.name}>
                      <FormLabel>Nome Completo *</FormLabel>
                      <Input {...register('name')} />
                      <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.phone}>
                      <FormLabel>Telefone *</FormLabel>
                      <Input {...register('phone')} />
                      <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel>Email *</FormLabel>
                    <Input type="email" {...register('email')} />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.subject}>
                    <FormLabel>Assunto *</FormLabel>
                    <Input {...register('subject')} placeholder="Ex: Solicitação de orçamento" />
                    <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message}>
                    <FormLabel>Mensagem *</FormLabel>
                    <Textarea
                      {...register('message')}
                      placeholder="Descreva sua necessidade ou dúvida..."
                      rows={4}
                    />
                    <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    variant="lokvan"
                    size="lg"
                    w="full"
                    isLoading={isSubmitting}
                    loadingText="Enviando..."
                  >
                    Enviar Mensagem
                  </Button>

                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    * Campos obrigatórios
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            {/* Address and Schedule */}
            <VStack spacing={8} align="start">
              <Card shadow="lg" w="full">
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack spacing={4}>
                      <Icon as={FaMapMarkerAlt} color="lokvan.primary" boxSize={6} />
                      <VStack align="start" spacing={1}>
                        <Heading size="md" color="lokvan.primary">
                          Endereço
                        </Heading>
                        <Text color="gray.600">
                          Loteamento - Granjas Rurais Pres. Vargas<br />
                          Salvador - BA<br />
                          CEP 41230-000
                        </Text>
                      </VStack>
                    </HStack>

                    <Button
                      variant="lokvan"
                      size="sm"
                      onClick={() => {
                        const address = "Loteamento Granjas Rurais Pres. Vargas, Salvador - BA"
                        const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`
                        window.open(mapsUrl, '_blank')
                      }}
                    >
                      Ver no Google Maps
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              <Card shadow="lg" w="full">
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <HStack spacing={4}>
                      <Icon as={FaClock} color="lokvan.primary" boxSize={6} />
                      <VStack align="start" spacing={1}>
                        <Heading size="md" color="lokvan.primary">
                          Horário de Atendimento
                        </Heading>
                        <VStack align="start" spacing={1}>
                          <Text color="gray.600">
                            <Text as="span" fontWeight="bold">Segunda a Sexta:</Text> 8h às 18h
                          </Text>
                          <Text color="gray.600">
                            <Text as="span" fontWeight="bold">Sábado:</Text> 8h às 12h
                          </Text>
                          <Text color="gray.600">
                            <Text as="span" fontWeight="bold">Domingo:</Text> Fechado
                          </Text>
                          <Text color="lokvan.accent" fontWeight="bold" mt={2}>
                            WhatsApp 24h para emergências
                          </Text>
                        </VStack>
                      </VStack>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>

              <Card shadow="lg" w="full">
                <CardBody p={8}>
                  <VStack spacing={4} align="start">
                    <Heading size="md" color="lokvan.primary">
                      Empresa
                    </Heading>
                    <VStack align="start" spacing={2}>
                      <Text><Text as="span" fontWeight="bold">Razão Social:</Text> LOKVAN LOCACAO E TRANSPORTES LTDA</Text>
                      <Text><Text as="span" fontWeight="bold">CNPJ:</Text> 04.157.527/0001-85</Text>
                      <Text><Text as="span" fontWeight="bold">Fundação:</Text> 2009</Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Map Placeholder */}
      <Box h="400px" bg="gray.200" position="relative">
        <Container maxW="6xl" h="full" display="flex" alignItems="center" justifyContent="center">
          <VStack spacing={4} textAlign="center">
            <Icon as={FaMapMarkerAlt} boxSize={12} color="lokvan.primary" />
            <Heading size="md" color="lokvan.primary">
              Nossa Localização
            </Heading>
            <Text color="gray.600">
              Salvador - BA
            </Text>
            <Button
              variant="lokvan"
              onClick={() => {
                const address = "Loteamento Granjas Rurais Pres. Vargas, Salvador - BA"
                const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`
                window.open(mapsUrl, '_blank')
              }}
            >
              Abrir no Google Maps
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact