import styled from "styled-components";

export const Container = styled.div`
	--padding-top: 100px;
	--padding-top: 120px;
	--heading-font-size: 32px;
	--content-width: 100%;

	&.blue {
		--bg-color: var(--color-primary);
		--text-color: var(--color-tertiary);
		--logo-color: var(--color-secondary);
	}
	&.beige {
		--bg-color: var(--color-secondary);
		--text-color: var(--color-tertiary);
		--logo-color: var(--color-primary);
	}
	&.white {
		--bg-color: var(--color-tertiary);
		--text-color: var(--color-quaternary);
		--logo-color: var(--color-blue);
	}
	&.black {
		--bg-color: var(--color-quaternary);
		--text-color: var(--color-tertiary);
		--logo-color: var(--color-blue);
	}
	&:first-child {
		--padding-top: 130px;
		--heading-font-size: 51px;

		@media screen and (min-width: 1024px) {
			--content-width: 50%;
			--heading-font-size: 71px;
		}
	}
`;

export const Content = styled.div``;
