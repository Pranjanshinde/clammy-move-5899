import "./frontpage.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Image,Box } from '@chakra-ui/react';
import Footer from "./footer1.jsx";
function Homepage(){

    return(
        <>
        <div>
            <div className="banup">
            <p>India's Largest D2C Nutrition Platform</p>
            <img className="banner" src="https://img9.hkrtcdn.com/24447/bnr_2444658_o.jpg" alt="banner" />
            </div>
            <h3 className="h2">Price Slash Alert</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/24454/prd_2445300_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    {/* <h2>₹400</h2> */}
                    <p className="desc">MuscleBlaze Biozyme Iso-Zero, 2 kg (4.4 lb), Low Carb Ice Cream Chocolate</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img2.hkrtcdn.com/12139/prd_1213811-MuscleBlaze-Super-Gainer-XXL-OP-6.6-lb-Chocolate_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Super Gainer XXL Powder, 3 kg (6.6 lb), Chocolate</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/24444/prd_2444380_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">TrueBasics Biotin 10000 mcg, 60 tablet(s)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/19432/prd_1943100-MuscleBlaze-Creatine-Monohydrate-OP-old-Unflavoured-0.22-lb_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Creatine Monohydrate Powders, 100 g (0.22 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            <div className="flexbox">
            <Box boxSize='sm' >
  <Image src='https://img5.hkrtcdn.com/24407/bnr_2440674_o.jpg' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img5.hkrtcdn.com/24380/bnr_2437994_o.jpg' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img5.hkrtcdn.com/24375/bnr_2437434_o.jpg' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img7.hkrtcdn.com/24375/bnr_2437436_o.jpg' alt='Dan Abramov' height="320px" borderRadius="8px" />
</Box>
            </div>
            <h3 className="h2">Top Deals</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img5.hkrtcdn.com/19801/prd_1980004_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MB Fuel One Whey Protein Immunity+, 2 kg (4.4 lb), Chocolate</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img10.hkrtcdn.com/14847/prd_1484609-MuscleBlaze-Creatine-Monohydrate-Unflavoured-0.55-lb_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Creatine Monohydrate, 250 g (0.55 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img3.hkrtcdn.com/18187/prd_1818612-MuscleBlaze-Fish-Oil-1000-mg-Indias-Only-Labdoor-USA-Certified-for-Purity-Accuracy-90-softgels_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Fish Oil (1000 mg) India's Only Labdoor</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/21447/prd_2144620-MuscleBlaze-High-Protein-Oats-2-kg-Dark-Chocolate_c_l.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze High Protein Oats, 2 kg, Dark Chocolate</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            <h3 className="h2">Top Deals</h3>
            <div className="flexbox">
            <Box boxSize='sm' >
  <Image src='https://img9.hkrtcdn.com/24441/bnr_2444088_o.jpg' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img1.hkrtcdn.com/24441/bnr_2444090_o.jpg' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img1.hkrtcdn.com/24442/bnr_2444190_o.jpg' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img3.hkrtcdn.com/24442/bnr_2444192_o.jpg' alt='Dan Abramov' height="320px" borderRadius="8px" />
</Box>
            </div>
            <h3 className="h2">Flash Sale</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img5.hkrtcdn.com/22231/prd_2223004-MuscleBlaze-Biozyme-Performance-Whey-2.2-lb-Chocolate-Hazelnut_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Biozyme Performance Whey, 1 kg (2.2 lb), Chocolate Hazelnut</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img10.hkrtcdn.com/12059/prd_1205819_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Super Gainer XXL, 3 kg (6.6 lb), Chocolate</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img5.hkrtcdn.com/24237/prd_2423664-HealthKart-HK-Vitals-Skin-Radiance-Collagen-200-g-Orange_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">HealthKart HK Vitals Skin Radiance Collagen, 200 g, Orange</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img9.hkrtcdn.com/18797/prd_1879608-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-2-lb-Double-Rich-Chocolate_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">ON (Optimum Nutrition) Gold Standard 100% Whey Protein</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            
            <img className="banner" src="https://img3.hkrtcdn.com/24238/bnr_2423722_o.jpg" alt="banner" />
            <h3 className="h2">Pick Of The Day</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img6.hkrtcdn.com/12135/prd_1213415-MuscleBlaze-Raw-Whey-Protein-4.4-lb-Unflavoured_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Raw Whey Protein 80%, 2 kg (4.4 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img10.hkrtcdn.com/14847/prd_1484609-MuscleBlaze-Creatine-Monohydrate-Unflavoured-0.55-lb_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Creatine Monohydrate, 250 g (0.55 lb)M</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img7.hkrtcdn.com/22783/prd_2278206-GNC-Pro-Performance-100-Whey-Protein-4-lb-Chocolate-Fudge_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">GNC Pro Performance 100% Whey Protein, 1.82 kg (4 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img7.hkrtcdn.com/16989/prd_1698896-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            <h3 className="h2">Picks You Can't Miss</h3>
            <div className="flexbox">
            <Box boxSize='sm' >
  <Image src='https://img5.hkrtcdn.com/23804/bnr_2380304_o.png' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img7.hkrtcdn.com/23804/bnr_2380306_o.png' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img9.hkrtcdn.com/23804/bnr_2380308_o.png' alt='Dan Abramov'  height="320px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img1.hkrtcdn.com/23804/bnr_2380310_o.png' alt='Dan Abramov' height="320px" borderRadius="8px" />
</Box>
            </div>
            <h3 className="h2">Wellness & Personal Care</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img7.hkrtcdn.com/20569/prd_2056826-HealthKart-HK-Vitals-Multivitamin-with-MultimineralTaurine-Ginseng-Extract-90-tablets-Unflavoured_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">HealthKart HK Vitals Multivitamin with Multimineral,Taurine</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img5.hkrtcdn.com/22712/prd_2271104-HealthKart-HK-Vitals-Biotin-Shampoo-175-ml-with-Red-Onion-Extract_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">HealthKart HK Vitals Biotin Shampoo, 175 ml, with Red Onion Extract</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img5.hkrtcdn.com/20643/prd_2064214-HealthKart-HK-Vitals-Biotin-10000-mcg-90-tablets-Unflavoured_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">HealthKart HK Vitals Biotin (10000 mcg), 90 tablet(s)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/24454/prd_2445300_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze Biozyme Iso-Zero, 2 kg (4.4 lb), Low Carb Ice Cream Chocolate</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            <h3 className="h2">New Launches View All</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img7.hkrtcdn.com/22712/prd_2271106-HealthKart-HK-Vitals-Collagen-Face-Moisturiser-50-ml-with-Hyaluronic-Acid_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">HealthKart HK Vitals Collagen Face Moisturizer, 50 ml, with Hyaluronic Acid</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/19873/prd_1987230-MuscleBlaze-High-Protein-Peanut-Butter-1-kg-Dark-Chocolate-Creamy-Tub_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze High Protein Peanut Butter, 1 kg, Dark Chocolate Creamy</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/21374/prd_2137310-Myfitness-Chocolate-Peanut-Butter-1.25-kg-Smooth_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">Myfitness Chocolate Peanut Butter, 1.2 kg, Smooth</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/22302/prd_2230120-MuscleBlaze-High-Protein-Oats-1-kg-Dark-Chocolate_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleBlaze High Protein Oats, 1 kg, Dark Chocolate</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            <h3 className="h2">Workout Essentials</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img9.hkrtcdn.com/16134/prd_1613308-ON-Optimum-Nutrition-Micronized-Creatine-Powder-Unflavoured-0.55-lb_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">ON (Optimum Nutrition) Micronized Creatine Powder, 250 g (0.55 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img6.hkrtcdn.com/12181/prd_1218085-GNC-Creatine-Monohydrate-Unflavoured-0.55-lb_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">GNC Creatine Monohydrate, 250 g (0.55 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img7.hkrtcdn.com/23006/prd_2300596-MuscleTech-Platinum-100-Creatine-Unflavoured-0.88-lb_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">MuscleTech Platinum 100% Creatine, 400 g (0.88 lb)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img8.hkrtcdn.com/13068/prd_1306707-Cellucor-C4-Explosive-Preworkout-0.85-lb-Watermelon_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">Cellucor C4 Explosive Preworkout, 390 g (0.85 lb), Watermelon</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            <img className="banner" src="https://img9.hkrtcdn.com/23824/bnr_2382348_o.png" alt="banner" />
            <h3 className="h2">Fit Food Range</h3>
            <div className="carder">
                <div className="card">
                    <img src="https://img1.hkrtcdn.com/24444/prd_2444380_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">TrueBasics Biotin 10000 mcg, 60 tablet(s)</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img9.hkrtcdn.com/23216/prd_2321578_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">HealthKart HK Vitals Super Strength Fish Oil Purity 84%, 60 softgels</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img9.hkrtcdn.com/22987/prd_2298668-TrueBasics-10-Vitamin-C-Skin-Illuminating-Serum-with-Kakadu-Plum-Extract-30-ml-for-Skin-Brightening-Fine-Lines-Wrinkles_c_s.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">TrueBasics 10% Vitamin C Skin Illuminating Serum with Kakadu Plum</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>
                <div className="card">
                    <img src="https://img7.hkrtcdn.com/22987/prd_2298666-TrueBasics-10-Niacinamide-Skin-Clarifying-Serum-with-Zinc-Rumex-Extract-30-ml-for-Pigmentation-Dark-Spots-Acne-Marks_o.jpg" alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="15px" alt="" ></img>
                    </div>
                    <div className="rev">100 Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="12px" />
                    </div>
                    <p className="desc">TrueBasics 10% Niacinamide Skin Clarifying Serum with Zinc & Rumex Extract</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px">Add To Cart</Button>

                        </ButtonGroup>
                </div>            
            </div>
            <h3 className="h2">Brand Range</h3>
            <div className="flexbox">
            <Box boxSize='sm' >
  <Image src='https://img3.hkrtcdn.com/22115/bnr_2211472_o.png' alt='Dan Abramov'  height="120px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img7.hkrtcdn.com/22043/normal_2204256_o.png' alt='Dan Abramov'  height="120px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img9.hkrtcdn.com/22043/normal_2204258_o.png' alt='Dan Abramov'  height="120px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img1.hkrtcdn.com/22043/normal_2204260_o.png' alt='Dan Abramov' height="120px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img9.hkrtcdn.com/22101/bnr_2210088_o.png' alt='Dan Abramov' height="120px" borderRadius="8px" />
</Box>
<Box boxSize='sm' >
  <Image src='https://img1.hkrtcdn.com/22099/bnr_2209880_o.png' alt='Dan Abramov' height="120px" borderRadius="8px" />
</Box>
            </div>
<h3 className="h2">Why HealthKart ?</h3>       
        <div className="three">
<div >
<img src="https://img9.hkrtcdn.com/20791/normal_2079088_o.png" alt="img"  />
<h4>Wide range of Nutritional products</h4>
<p>One-stop fitness and health destination</p>
</div>
<div>
<img src="https://img3.hkrtcdn.com/20791/normal_2079092_o.png" alt="img"  />
<h4>100% Original & Authentic</h4>
<p>Tight control on sourcing and distribution</p>
</div>
<div>
<img src="https://img1.hkrtcdn.com/20791/normal_2079090_o.png" alt="img"  />
<h4>Guide to Fit and Healthy Lifestyle</h4>
<p>Your true partner in health & wellness journey</p>
</div>
        </div>
        <div className="dual">
        <div >
            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/download-App-IMG.svg" alt="cd" />
        </div>
        <div>
            <h1>Download the</h1>
            <h1>Healthcart Mobile App</h1>
            <div className="tab">
                <div className="image">
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-cart.svg" alt="A" />
                </div>
                <div>
                    <h3>Easier, Faster Shopping</h3>
                    <p>Get Authentic supplements, Fitness solutions, and a healthy lifestyle</p>
                </div>
            </div>
            <div className="tab">
                <div className="image">
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-cart.svg" alt="A" />
                </div>
                <div>
                    <h3>Fuel your Fitness Goals</h3>
                    <p>Get Authentic supplements, Fitness solutions, and a healthy lifestyle</p>
                </div>
            </div>
            <div className="tab">
                <div className="image">
                <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/app-tick.svg" alt="A" />
                </div>
                <div>
                    <h3>Get Exclusive App Only Benefits</h3>
                    <p>Get Authentic supplements, Fitness solutions, and a healthy lifestyle</p>
                </div>
            </div>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcerr2SWYq1l2OXV-OpH_CFRYP3FLZ9ypRg&usqp=CAU" alt="xy" />
            </div>
        </div>
        
            
        
        </div>
        <Footer/>
        </div>
        
        </>
    )
}

export default Homepage;
// style="line-height: 26px; margin-top: 10px;"