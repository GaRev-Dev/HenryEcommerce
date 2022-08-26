import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import {
  filterBrand,
  getProduct,
  orderPrice,
} from '../../Redux/actions/actions';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import './FiltersMenu.css';

function FiltersMenu({ setFilter, filters }) {
  const handleOnChange = (e) => {
    setFilter(e.target.name, e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleOrder = (e) => {
    dispatch(orderPrice(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterBrand(e.target.value));
  };

  return (
    <Container>
      <div className="m-3 order__container">
        <Button as={Link} to="/addProduct" className="createBurger__btn">
          Add Product
        </Button>

        <select
          name="order"
          onChange={handleOnChange}
          onClick={(e) => handleOrder(e)}
          className="select__order"
        >
          <option value="All">Todos</option>
          <option value="Max">Mayor precio</option>
          <option value="Min">Menor precio</option>
        </select>

        <label>
          Filtrar por marca:
          <select onClick={(e) => handleFilter(e)}>
            <option value="All">All</option>
            <option value="Samsung">Samsung</option>
            <option value="Huawei">Huawei</option>
          </select>
        </label>
      </div>
      <div className="filters__btn__container">
        {/* <ButtonGroup
          aria-label="Filter Buttons"
          className="me-2 filter__btn"
          size="sm"
        >
          <Button
            name="category"
            value=""
            onClick={handleOnChange}
            className={
              filters.category === '' ? 'filter__btn activeBtn' : 'filter__btn'
            }
          >
            Todo
          </Button>
          <Button
            name="category"
            value="burgers"
            onClick={handleOnChange}
            className={
              filters.category === 'burgers'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Hamburguesas
          </Button>
          <Button
            name="category"
            value="combos"
            onClick={handleOnChange}
            className={
              filters.category === 'combos'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Combos
          </Button>
          <Button
            name="category"
            value="beverages"
            onClick={handleOnChange}
            className={
              filters.category === 'beverages'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Bebidas
          </Button>
          <Button
            name="category"
            value="fries"
            onClick={handleOnChange}
            className={
              filters.category === 'fries'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Papas
          </Button>

          <Button
            name="isVeggie"
            value="true"
            onClick={handleOnChange}
            className={
              filters.isVeggie === 'true'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Veggie
          </Button>
        </ButtonGroup> */}
      </div>
    </Container>
  );
}

export default FiltersMenu;
