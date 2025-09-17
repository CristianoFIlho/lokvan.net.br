import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Link,
  Divider,
  Icon,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bg="lokvan.primary" color="white" mt="auto">
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Contato */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Contato
            </Text>
            <VStack align="start" spacing={2}>
              <HStack>
                <Icon as={FaPhone} />
                <Text>(71) 3333-4444</Text>
              </HStack>
              <HStack>
                <Icon as={FaWhatsapp} />
                <Text>(71) 99999-8888</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <Text>contato@lokvan.net.br</Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Endereço */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Endereço
            </Text>
            <HStack align="start">
              <Icon as={FaMapMarkerAlt} mt={1} />
              <Text>
                RUA SAO MARCOS, 41, SALA 01<br />
                CENTRO, SIMOES FILHO - BA<br />
                CEP 43700-000
              </Text>
            </HStack>
          </VStack>

          {/* Serviços */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Serviços
            </Text>
            <VStack align="start" spacing={1}>
              <Text>Fretamento</Text>
              <Text>Viagens e Turismo</Text>
              <Text>Eventos Corporativos</Text>
              <Text>Transfer Executivo</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider my={6} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Text fontSize="sm">
            © 2024 LOKVAN LOCACAO E TRANSPORTES LTDA - CNPJ: 04.157.527/0001-85
          </Text>
          <HStack justify={{ base: 'start', md: 'end' }} spacing={4}>
            <Link href="https://wa.me/5571999998888" isExternal>
              <Icon as={FaWhatsapp} boxSize={6} _hover={{ color: 'green.300' }} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={6} _hover={{ color: 'pink.300' }} />
            </Link>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer