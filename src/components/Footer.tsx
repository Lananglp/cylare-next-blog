import React from 'react'
import Container from './Container'

function Footer() {
    return (
        <footer className="border-t border-zinc-300 shadow-footer">
            <Container>
                <div className="text-center py-8">
                    <p className="text-zinc-500 text-sm">© Copyright Cylare Next Web {new Date().getFullYear()}</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer