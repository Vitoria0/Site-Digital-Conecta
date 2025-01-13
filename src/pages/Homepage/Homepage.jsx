import { Box, TextField,IconButton , Typography, Button } from '@mui/material';
import { Secondary } from '../../components/Botao/SecondaryButton.jsx';
import { LinkMenu } from '../../components/LinkMenu/LinkMenu.jsx';
import { Primary } from '../../components/Botao/PrimaryButton.jsx';
import background from '../../assets/img/background.png';
import quemsomos from '../../assets/img/quemsomos.png';
import seta from '../../assets/img/seta.png';
import td from '../../assets/img/td.png';
import form from '../../assets/img/form.png';
import { useState } from 'react';
import { ReactSVG } from '../../assets/svg/react.jsx';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';

const HomePage = () => {
	const [formData, setFormData] = useState({
		nome: '',
		empresa: '',
		email: '',
		numeroContato: '',
		mensagem: '',
	});

	const [errors, setErrors] = useState({
		nome: false,
		email: false,
		numeroContato: false,
	});

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleClick = () => {
    window.open('https://w.app/OVacNf', '_blank');
  };
  const handleClickOnborading = () => {
    window.open('https://onboarding-o1ie-io4dxuwzi-vitoria0s-projects.vercel.app/', '_blank');
  };

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		const newErrors = {
			nome: formData.nome === '',
			email: !/\S+@\S+\.\S+/.test(formData.email),
			numeroContato: !/^\d+$/.test(formData.numeroContato),
		};

		setErrors(newErrors);

		const hasErrors = Object.values(newErrors).some(error => error);

		if (!hasErrors) {
        
        const templateParams = {
            to_name: formData.email, 
            from_name: formData.nome,
            message: formData.mensagem
        };

        emailjs.send('service_yxexx38', 'template_a7decfo', templateParams, 'plHlW7AukEn4qVbIz')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setFormData({
            nome: '',
            email: '',
            mensagem: ''
        });
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'start',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				minWidth: { xl: '98.2vw' },
				maxWidth: { xs: '100vw', xl: '100vw' },
				minHeight: '100vh',
				margin: 0,
				gap: { xs: 5, md: 10, xl: 12 },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					flexDirection: 'column',
					width: '100%',
					alignItems: 'center',
					padding: { xs: '5% 5%', md: '2% 10%', xl: '3% 15%' },
					backgroundImage: `url(${background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					margin: 0,
					color: '#fff',
					position: 'relative',

					gap: { xs: 5, md: 10, xl: 12 },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						gap: { xs: 2, md: 5 },
						backgroundColor: '#FFF',
						borderRadius: '10px',
						padding: '10px 20px',
						width: '100%',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<ReactSVG />
					<Box sx={{ display: 'flex', gap: { xs: 1, md: 3, lg: 4 }, alignItems: 'center' }}>
						<LinkMenu to={() => handleScroll('QuemSomos')} text='Quem Somos' />
						<LinkMenu to={() => handleScroll('Consultoria')} text='Consultoria' />
						<LinkMenu to={() => handleScroll('Capacitação')} text='Capacitação' />
					</Box>
					<Secondary>Entre em contato</Secondary>
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: { xs: 2, md: 5 },
						width: '100%',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: 3, md: 3, xl: 3 },
							alignItems: 'start',
							width: { xs: '90%', md: '56%', xl: '50%' },
							pb: { xs: 8 },
						}}
					>
						<Typography
							variant='h4'
							fontFamily={'Poppins'}
							fontWeight={'bold'}
							color={'#FFFFFF'}
							sx={{
								lineHeight: '150%',
								fontSize: {
									xs: '1rem',
									sm: '1.4rem',
									md: '1.5rem',
									lg: '1.9rem',
									xl: '2.1rem',
								},
							}}
						>
							Soluções Inteligentes para Aumentar a Produtividade e Impulsionar o
							Crescimento do Seu Negócio
						</Typography>
						<Typography
							color={'#DEDEDE'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									sm: '0.8rem',
									md: '0.8rem',
									lg: '1rem',
									xl: '1em',
								},
							}}
						>
							Aprimore seus processos, desenvolva suas equipes e alcance resultados
							excepcionais com estratégias sob medida.
						</Typography>
						<Primary metodo={handleClick}>Descubra como transformar seu negócio</Primary>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexDirection: { xs: 'column', md: 'row' },
						width: { xs: '100%', md: '80%', xl: '70%' },
						padding: 0,
						margin: 0,
						gap: { xs: 3, md: 1 },
						backgroundColor: '#F5F5F5',
						boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.40)',
						borderRadius: '10px',
						color: '#000000',
						position: { xs: 'initial', md: 'absolute' },
						bottom: { xs: '-18rem', md: '-8rem', xl: '-10rem' },
						padding: { xs: '3rem 1rem', md: '2rem 1rem', xl: '3rem' },
					}}
				>
					<Box
						sx={{
							width: { xs: '90%', md: '25%' },
							justifyContent: 'center',
							alignItems: 'start',
							ml: { md: '1rem' },
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography
							color={'#0B132A'}
							fontFamily={'Poppins'}
							fontWeight={800}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '1.1rem',
									xl: '1em',
								},
							}}
						>
							Especialização em Vendas
						</Typography>
						<Typography
							color={'#4F5665'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '0.9rem',
									xl: '1em',
								},
							}}
						>
							Somos especialistas em programas de educação para aumento das vendas.
						</Typography>
					</Box>
					<Box
						sx={{
							width: { xs: '90%', md: '25%' },
							justifyContent: 'center',
							alignItems: 'start',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography
							color={'#0B132A'}
							fontFamily={'Poppins'}
							fontWeight={800}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '1.1rem',
									xl: '1em',
								},
							}}
						>
							Métodos Exclusivos
						</Typography>
						<Typography
							color={'#4F5665'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '0.9rem',
									xl: '1em',
								},
							}}
						>
							Soluções de aprendizagem personalizadas para o seu produto.
						</Typography>
					</Box>
					<Box
						sx={{
							width: { xs: '90%', md: '25%' },
							justifyContent: 'center',
							alignItems: 'start',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography
							color={'#0B132A'}
							fontFamily={'Poppins'}
							fontWeight={800}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '1.1rem',
									xl: '1em',
								},
							}}
						>
							Da Estratégia à Execução
						</Typography>
						<Typography
							color={'#4F5665'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '0.9rem',
									xl: '1em',
								},
							}}
						>
							Nossos projetos de consultoria alinham elementos estratégicos visando a
							excelência operacional.
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					paddingX: { xs: ' 5%', md: '10%', xl: '15%' },
					margin: 0,
					color: '#fff',
					gap: { xs: 5, md: 10, xl: 12 },
					pt: { xs: 0, md: 10, xl: 12 },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexDirection: { xs: 'column', md: 'row' },
						width: '100%',
						gap: { xs: 5, md: 10, xl: 12 },
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: { xs: '40%', md: '56%', xl: '50%' },
						}}
					>
						<img src={quemsomos} alt='background' style={{ width: '100%' }} />
					</Box>
					<Box
id="QuemSomos"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: 3, md: 3, xl: 3 },
							alignItems: 'start',
							width: { xs: '90%', md: '56%', xl: '50%' },
						}}
					>
						<Typography
							color={'#FE7062'}
							fontFamily={'Poppins'}
							fontWeight={600}
							variant='h6'
							sx={{
								fontSize: {
									xs: '1.5rem',
									md: '1.8rem',
									lg: '2rem',
									xl: '2.5em',
								},
							}}
						>
							Quem Somos
						</Typography>
						<Typography
							color={'#4F5665'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								lineHeight: 1.3,
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '0.9rem',
									xl: '1em',
								},
							}}
						>
							<b>Somos especialistas em levar empresas a novos patamares de sucesso.</b>{' '}
							Combinamos estratégias personalizadas e capacitação contínua para aumentar a
							produtividade, garantir a qualidade e impulsionar as vendas de forma eficaz.
							<br></br>
							<br></br>
							Se você busca eficiência e resultados consistentes, estamos aqui para ajudar.
							Adaptamos nossas soluções às necessidades de empresas de todos os tamanhos,
							capacitando sua equipe para alcançar seu potencial máximo.Não perca mais
							tempo. Entre em contato e descubra como podemos acelerar o crescimento do seu
							negócio.
						</Typography>
						<Primary  metodo={handleClick}>Fale com um especialista</Primary>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					backgroundColor: '#F9F9F9',
					paddingX: { xs: ' 5%', md: '10%', xl: '15%' },
					margin: 0,
					color: '#fff',
					gap: { xs: 3, md: 8, xl: 8 },
					py: '3rem',
				}}
			>
				<Box
 id="Consultoria"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: { xs: 3, md: 3, xl: 3 },
						alignItems: 'start',
						width: { xs: '90%', md: '90%', xl: '90%' },
					}}
				>
					<Typography
						variant='h4'
						fontFamily={'Poppins'}
						fontWeight={'bold'}
						color={'#0B132A'}
						sx={{
							lineHeight: '150%',
							fontSize: {
								xs: '1rem',
								sm: '1.4rem',
								md: '1.5rem',
								lg: '1.9rem',
								xl: '2.1rem',
							},
						}}
					>
						Transforme seu Processso Comercial em resultados
					</Typography>
					<Typography
						color={'#4F5665'}
						fontFamily={'Poppins'}
						variant='h6'
						sx={{
							fontSize: {
								xs: '0.8rem',
								sm: '0.8rem',
								md: '0.8rem',
								lg: '1rem',
								xl: '1em',
							},
						}}
					>
						Transformamos desafios em oportunidades. Nossas consultorias personalizadas
						identificam pontos de melhoria e desenham estratégias para aumentar suas vendas e
						fidelizar clientes.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexDirection: { xs: 'column', md: 'row' },
						width: { xs: '90%', md: '90%', xl: '90%' },
						gap: { xs: 1, md: 3, xl: 3 },
					}}
				>
					<Box
						sx={{
							width: '19rem',
							height: '19rem',
							border: '3px solid #EEEFF2',
							borderRadius: '10px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: { xs: 'center', md: 'end' },
							alignItems: 'center',
							padding: { xs: 3, md: 3, xl: 3 },
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								alignItems: 'center',
								width: '100%',
								gap: { xs: 1, md: 2, xl: 2 },
								alignItems: 'start',
							}}
						>
							<Typography
								variant='h4'
								fontFamily={'Poppins'}
								fontWeight={'bold'}
								color={'#000'}
								sx={{
									lineHeight: '150%',
									fontSize: {
										xs: '1.rem',
										md: '1rem',
										lg: '1.5rem',
										xl: '1.5rem',
									},
								}}
							>
								Transforme Dados em Decisões
							</Typography>
							<Typography
								color={'#000'}
								fontFamily={'Poppins'}
								variant='h6'
								sx={{
									fontSize: {
										xs: '1rem',
										md: '0.8rem',
										lg: '0.9rem',
										xl: '1em',
									},
								}}
							>
								Ao analisar o processo de vendas tome decisões que impactam resultados.
							</Typography>
							<Primary noShadow  metodo={handleClick}>Fale com um Consultor</Primary>
						</Box>
					</Box>
					<Box
						sx={{
							width: '19rem',
							height: '19rem',
							backgroundImage: `url(${seta})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							borderRadius: '10px',
						}}
					></Box>
					<Box
						sx={{
							width: '19rem',
							height: '19rem',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: { xs: 'center', md: 'end' },
							alignItems: 'center',
							padding: { xs: 3, md: 3, xl: 3 },
							backgroundColor: '#FE7062',
							borderRadius: '10px',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								alignItems: 'center',
								width: '100%',
								gap: { xs: 1, md: 2, xl: 2 },
								alignItems: 'start',
							}}
						>
							<Typography
								variant='h4'
								fontFamily={'Poppins'}
								fontWeight={'bold'}
								color={'#FFF'}
								sx={{
									lineHeight: '150%',
									fontSize: {
										xs: '1.rem',
										md: '1rem',
										lg: '1.5rem',
										xl: '1.5rem',
									},
								}}
							>
								Tenha um funil a prova de falhas
							</Typography>
							<Typography
								color={'#FFF'}
								fontFamily={'Poppins'}
								variant='h6'
								sx={{
									fontSize: {
										xs: '1rem',
										md: '0.8rem',
										lg: '0.9rem',
										xl: '1em',
									},
								}}
							>
								Com a ajuda de insights valiosos, você pode criar um funil de vendas
								robusto que resista a desafios e impulsione o crescimento
							</Typography>
						</Box>
					</Box>
				</Box>
				<Typography
 id="Capacitação"
					variant='h4'
					width={'100%'}
					align='center'
					fontFamily={'Poppins'}
					fontWeight={'600'}
					color={'#4F5665'}
					sx={{
						lineHeight: '150%',
						transform: 'scale(0.8)',
						fontSize: {
							xs: '1.rem',
							md: '1rem',
							lg: '1.5rem',
							xl: '1.5rem',
						},
					}}
				>
					Capacitação T&D Personalizada para Seu Produto
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexDirection: { xs: 'column', md: 'row' },
						width: '100%',
						gap: { xs: 5, md: 10, xl: 12 },
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: { xs: '50%', md: '56%', xl: '50%' },
						}}
					>
						<img src={td} alt='background' style={{ width: '100%' }} />

						<Primary metodo={handleClickOnborading}>Onboarding Gratuito</Primary>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: 3, md: 3, xl: 3 },
							alignItems: 'start',
							width: { xs: '90%', md: '56%', xl: '50%' },
						}}
					>
						<Typography
							color={'#FE7062'}
							fontFamily={'Poppins'}
							fontWeight={600}
							variant='h6'
							sx={{
								lineHeight: '110%',
								fontSize: {
									xs: '1.5rem',
									md: '1.8rem',
									lg: '1.8rem',
									xl: '2.5em',
								},
							}}
						>
							Eleve o T&D na sua empresa com as nossas soluções
						</Typography>
						<Typography
							color={'#4F5665'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								lineHeight: 1.3,
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '0.9rem',
									xl: '1em',
								},
							}}
						>
							Entendemos as necessidades únicas do seu negócio e criamos soluções de
							treinamento sob medida para capacitar sua equipe de forma eficaz e prática.
							Nossa abordagem vai além da simples transmissão de conhecimento: oferecemos
							uma jornada de aprendizagem personalizada, com conteúdo exclusivo e
							metodologias inovadoras, focadas em gerar resultados tangíveis e duradouros.
							<br></br>
							<br></br>
							Com cursos interativos e imersivos, garantimos que sua equipe aprenda de forma
							dinâmica e aplique imediatamente o que foi aprendido. Transforme sua
							capacitação em um diferencial competitivo e leve sua empresa ao próximo nível!
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					paddingX: { xs: ' 5%', md: '10%', xl: '15%' },
					margin: 0,
					color: '#fff',
					gap: { xs: 5, md: 10, xl: 12 }, 
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'start',
						flexDirection: { xs: 'column', md: 'row' },
						width: '100%',
						gap: { xs: 5, md: 10, xl: 12 },
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'left',
							justifyContent: 'start',
							width: { xs: '80%', md: '56%', xl: '50%' },
						}}
					>
						<Typography
							color={'#FE7062'}
							fontFamily={'Poppins'}
							fontWeight={600}
							variant='h6'
							sx={{
								fontSize: {
									xs: '1.5rem',
									md: '1.8rem',
									lg: '2rem',
									xl: '2.5em',
								},
							}}
						>
							Pronto para Impulsionar o Sucesso da Sua Empresa?
						</Typography>
						<img src={form} alt='background' style={{ width: '100%' }} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: 3, md: 3, xl: 3 },
							alignItems: 'start',
							width: { xs: '100%', md: '56%', xl: '50%' },
						}}
					>
						<Typography
							color={'#000'}
							fontFamily={'Poppins'}
							fontWeight={600}
							variant='h6'
							sx={{
								lineHeight: '110%',
								fontSize: {
									xs: '1rem',
									md: '1rem',
									lg: '1.5rem',
									xl: '1.5em',
								},
							}}
						>
							Entre em contato e inicie a transformação agora mesmo!
						</Typography>
						<Typography
							color={'#4F5665'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								lineHeight: 1.1,
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '0.9rem',
									xl: '1em',
								},
							}}
						>
							Vamos criar juntos um plano de ação focado em resultados concretos!
						</Typography>
						<Box
							component='form'
							onSubmit={handleSubmit}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
								width: '100%',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									gap: 2,
									justifyContent: 'space-between',
								}}
							>
								<TextField
									label='Nome'
									name='nome'
									value={formData.nome}
									onChange={handleChange}
									error={errors.nome}
									helperText={errors.nome && 'O nome é obrigatório.'}
									fullWidth
									required
								/>
								<TextField
									label='Empresa'
									name='empresa'
									value={formData.empresa}
									onChange={handleChange}
									fullWidth
								/>
							</Box>{' '}
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									gap: 2,
									justifyContent: 'space-between',
								}}
							>
								<TextField
									label='Email'
									name='email'
									type='email'
									value={formData.email}
									onChange={handleChange}
									error={errors.email}
									helperText={errors.email && 'Digite um email válido.'}
									fullWidth
									required
								/>
								<TextField
									label='Número para Contato'
									name='numeroContato'
									value={formData.numeroContato}
									onChange={handleChange}
									error={errors.numeroContato}
									helperText={errors.numeroContato && 'Digite um número válido.'}
									fullWidth
									required
								/>
							</Box>
							<TextField
								label='Mensagem'
								name='mensagem'
								value={formData.mensagem}
								onChange={handleChange}
								multiline
								rows={4}
								fullWidth
							/>
							<Button
								variant='contained'
								type='submit'
								fullWidth
								sx={{
									px: { xs: 1, sm: 1.5, md: 2, xl: 3 },
									py: { xs: 1, sm: 1, md: 1.5 },
									borderRadius: '10px',
									boxShadow: '0px 10px 10px #FE706270',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										border: 0,
										transform: 'scale(1.03)',
									},
									'&:focus': {
										outline: 'none',
									},
								}}
							>
								<Typography
									variant='p'
									color={'#FFF'}
									fontWeight={'bold'}
									sx={{
										fontSize: {
											xs: '0.6rem',
											sm: '0.8rem',
											md: '0.7rem',
											lg: '0.8rem',
											xl: '0.8rem',
										},
									}}
								>
									Enviar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
	<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					backgroundColor: '#EFEFEF',
					paddingX: { xs: ' 5%', md: '10%', xl: '15%' },
					margin: 0,
					color: '#fff',
					gap: { xs: 3, md: 8, xl: 8 },
					py: '3rem',
				}}
			>
<Box
      sx={{
        display: 'flex',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <IconButton
        sx={{
          backgroundColor: '#25D366',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1DA851',
          },
        }}
        aria-label="WhatsApp"
        href="https://w.app/OVacNf" // Substitua pelo link do seu WhatsApp
        target="_blank"
      >
        <WhatsAppIcon />
      </IconButton>

      <IconButton
        sx={{
          backgroundColor: '#E4405F',
          color: 'white',
          '&:hover': {
            backgroundColor: '#D63653',
          },
        }}
        aria-label="Instagram"
        href="https://www.instagram.com/chelly.mia?igsh=YjNhd2liM2FyY3Br" // Substitua pelo link do seu Instagram
        target="_blank"
      >
        <InstagramIcon />
      </IconButton>

      <IconButton
        sx={{
          backgroundColor: '#1877F2',
          color: 'white',
          '&:hover': {
            backgroundColor: '#165CD7',
          },
        }}
        aria-label="Facebook"
        href="https://www.facebook.com/profile.php?id=100051430336290" // Substitua pelo link do seu Facebook
        target="_blank"
      >
        <FacebookIcon />
      </IconButton>

      <IconButton
        sx={{
          backgroundColor: '#EA4335',
          color: 'white',
          '&:hover': {
            backgroundColor: '#C5382F',
          },
        }}
        aria-label="Email"
        href="mailto:chelly.mia.cm@gmail.com" // Substitua pelo seu email
      >
        <EmailIcon />
      </IconButton>
    </Box>
<Typography
							color={'#4F5665'}
							fontFamily={'Poppins'}
							variant='h6'
							sx={{
								fontSize: {
									xs: '0.8rem',
									md: '0.8rem',
									lg: '0.9rem',
									xl: '1em',
								},
							}}
						>© 2025 Digital Conecta. All Rights Reserved.</Typography>
</Box>
		</Box>
	);
};

export default HomePage;
