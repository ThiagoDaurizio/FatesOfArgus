import { BrowserRouter, Switch, Route } from "react-router-dom"

import PageHome from "../Pages/PageHome"
import PageLogin from "../Pages/PageLogin"
import PageSignup from "../Pages/PageSignup"
import PageGuilds from "../Pages/PageGuilds"
import PageAdm from "../Pages/PageAdm"

import PageClassWarrior from "../Pages/PageClassWarrior"
import PageClassCleric from "../Pages/PageClassCleric"
import PageClassChoosen from "../Pages/PageClassChoosen"
import PageClassDruid from "../Pages/PageClassDruid"
import PageClassWitcher from "../Pages/PageClassWitcher"

import { CompHeader } from "../Components/CompHeader/CompHeader"
import { CompSidebar } from "../Components/CompSidebar/CompSidebar"

import { StyledLayout } from "../Styles/StyledLayout"

export default function Router() {
    return(
        <div>
            <BrowserRouter>
                <CompHeader />
                <StyledLayout>
                    <CompSidebar />
                <Switch>
                    <Route exact path="/">
                        <PageHome />
                    </Route>

                    <Route exact path="/login">
                        <PageLogin />
                    </Route>

                    <Route exact path="/signup">
                        <PageSignup />
                    </Route>

                    <Route exact path="/class/warrior">
                        <PageClassWarrior />
                    </Route>

                    <Route exact path="/class/cleric">
                        <PageClassCleric />
                    </Route>

                    <Route exact path="/class/choosen">
                        <PageClassChoosen />
                    </Route>

                    <Route exact path="/class/druid">
                        <PageClassDruid />
                    </Route>

                    <Route exact path="/class/witcher">
                        <PageClassWitcher />
                    </Route>

                    <Route exact path="/guilds">
                        <PageGuilds />
                    </Route>

                    <Route exact path="/adm" >
                        <PageAdm />
                    </Route>
                </Switch>
                </StyledLayout>
            </BrowserRouter>
        </div>
    )


}