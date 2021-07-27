import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DefaultForm } from 'components/Registration/components/DefaultForm'
import { FirstOption } from 'components/Registration/components/FirstOption'
import { SecondOption } from 'components/Registration/components/SecondOption'
import { ThirdOption } from 'components/Registration/components/ThirdOption'

const Registration = () => {
    return (
        <Switch>
            <Route path="/inscribirse/un-modulo" component={FirstOption} />
            <Route path="/inscribirse/cuatro-modulos" component={SecondOption} />
            <Route path="/inscribirse/todos-modulos" component={ThirdOption} />
            <Route exact path="/inscribirse/" component={DefaultForm} />
        </Switch>
    )
}

export { Registration }
